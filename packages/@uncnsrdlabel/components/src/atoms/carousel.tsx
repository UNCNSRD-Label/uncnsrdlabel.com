'use client';

import useEmblaCarousel, {
	type EmblaCarouselType as CarouselApi,
	type EmblaOptionsType as CarouselOptions,
	type EmblaPluginType as CarouselPlugin,
} from 'embla-carousel-react';
import {ArrowLeft, ArrowRight} from 'lucide-react';
import * as React from 'react';
import {cn} from '@uncnsrdlabel/lib';
import {Button} from './button';

type CarouselProperties = {
	opts?: CarouselOptions;
	plugins?: CarouselPlugin[];
	orientation?: 'horizontal' | 'vertical';
	setApi?: (api: CarouselApi) => void;
};

type CarouselContextProperties = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0];
	api: ReturnType<typeof useEmblaCarousel>[1];
	scrollPrev: () => void;
	scrollNext: () => void;
	canScrollPrev: boolean;
	canScrollNext: boolean;
} & CarouselProperties;

const CarouselContext = React.createContext<CarouselContextProperties | undefined>(null);

function useCarousel() {
	const context = React.useContext(CarouselContext);

	if (!context) {
		throw new Error('useCarousel must be used within a <Carousel />');
	}

	return context;
}

const Carousel = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & CarouselProperties
>(
	(
		{
			orientation = 'horizontal',
			opts,
			setApi,
			plugins,
			className,
			children,
			...properties
		},
		reference,
	) => {
		const [carouselReference, api] = useEmblaCarousel(
			{
				...opts,
				axis: orientation === 'horizontal' ? 'x' : 'y',
			},
			plugins,
		);
		const [canScrollPrevious, setCanScrollPrevious] = React.useState(false);
		const [canScrollNext, setCanScrollNext] = React.useState(false);

		const onSelect = React.useCallback((api: CarouselApi) => {
			if (!api) {
				return;
			}

			setCanScrollPrevious(api.canScrollPrev());
			setCanScrollNext(api.canScrollNext());
		}, []);

		const scrollPrevious = React.useCallback(() => {
			api?.scrollPrev();
		}, [api]);

		const scrollNext = React.useCallback(() => {
			api?.scrollNext();
		}, [api]);

		const handleKeyDown = React.useCallback(
			(event: React.KeyboardEvent<HTMLDivElement>) => {
				if (event.key === 'ArrowLeft') {
					event.preventDefault();
					scrollPrevious();
				} else if (event.key === 'ArrowRight') {
					event.preventDefault();
					scrollNext();
				}
			},
			[scrollPrevious, scrollNext],
		);

		React.useEffect(() => {
			if (!api || !setApi) {
				return;
			}

			setApi(api);
		}, [api, setApi]);

		React.useEffect(() => {
			if (!api) {
				return;
			}

			onSelect(api);
			api.on('reInit', onSelect);
			api.on('select', onSelect);

			return () => {
				api?.off('select', onSelect);
			};
		}, [api, onSelect]);

		return (
			<CarouselContext.Provider
				value={{
					carouselRef: carouselReference,
					api,
					opts,
					orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
					scrollPrev: scrollPrevious,
					scrollNext,
					canScrollPrev: canScrollPrevious,
					canScrollNext,
				}}
			>
				<section
					ref={reference}
					onKeyDownCapture={handleKeyDown}
					className={cn('relative', className)}
					aria-roledescription='carousel'
					{...properties}
				>
					{children}
				</section>
			</CarouselContext.Provider>
		);
	},
);
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({className, ...properties}, reference) => {
	const {carouselRef, orientation} = useCarousel();

	return (
		<div
			ref={carouselRef}
			className='h-full cursor-grab overflow-hidden [&.dragging]:cursor-grabbing'
		>
			<div
				ref={reference}
				className={cn(
					'flex h-full',
					orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
					className,
				)}
				{...properties}
			/>
		</div>
	);
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({className, ...properties}, reference) => {
	const {orientation} = useCarousel();

	return (
		<figure
			ref={reference}
			role='group'
			aria-roledescription='slide'
			className={cn(
				'min-w-0 shrink-0 grow-0 basis-full',
				orientation === 'horizontal' ? 'pl-4' : 'pt-4',
				className,
			)}
			{...properties}
		/>
	);
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
HTMLButtonElement,
React.ComponentProps<typeof Button>
>(({className, variant = 'outline', size = 'icon', ...properties}, reference) => {
	const {orientation, scrollPrev, canScrollPrev} = useCarousel();

	return (
		<Button
			ref={reference}
			variant={variant}
			size={size}
			className={cn(
				'absolute  h-8 w-8 rounded-full',
				orientation === 'horizontal'
					? 'left-4 top-1/2 -translate-y-1/2 sm:left-8 md:left-12'
					: '-top-12 left-1/2 -translate-x-1/2 rotate-90',
				className,
			)}
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			{...properties}
		>
			<ArrowLeft className='h-4 w-4' />
			<span className='sr-only'>Previous slide</span>
		</Button>
	);
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
HTMLButtonElement,
React.ComponentProps<typeof Button>
>(({className, variant = 'outline', size = 'icon', ...properties}, reference) => {
	const {orientation, scrollNext, canScrollNext} = useCarousel();

	return (
		<Button
			ref={reference}
			variant={variant}
			size={size}
			className={cn(
				'absolute h-8 w-8 rounded-full',
				orientation === 'horizontal'
					? 'right-4 top-1/2 -translate-y-1/2 sm:right-8 md:right-12'
					: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
				className,
			)}
			disabled={!canScrollNext}
			onClick={scrollNext}
			{...properties}
		>
			<ArrowRight className='h-4 w-4' />
			<span className='sr-only'>Next slide</span>
		</Button>
	);
});
CarouselNext.displayName = 'CarouselNext';

export {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,

};

export {type EmblaCarouselType as CarouselApi} from 'embla-carousel-react';

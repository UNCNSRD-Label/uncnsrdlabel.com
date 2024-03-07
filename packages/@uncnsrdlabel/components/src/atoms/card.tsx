import * as React from 'react';
import {cn} from '@uncnsrdlabel/lib';

const Card = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({className, ...properties}, reference) => (
	<div
		ref={reference}
		className={cn('bg-card text-card-foreground border shadow-sm', className)}
		{...properties}
	/>
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({className, ...properties}, reference) => (
	<div
		ref={reference}
		className={cn('flex flex-col space-y-1.5 p-6', className)}
		{...properties}
	/>
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLHeadingElement>
>(({className, ...properties}, reference) => (
	<h2 ref={reference} className={cn('text-2xl', className)} {...properties} />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLParagraphElement>
>(({className, ...properties}, reference) => (
	<p
		ref={reference}
		className={cn('text-muted-foreground text-sm', className)}
		{...properties}
	/>
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({className, ...properties}, reference) => (
	<div ref={reference} className={cn('p-6 pt-0', className)} {...properties} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({className, ...properties}, reference) => (
	<div
		ref={reference}
		className={cn('flex items-center p-6 pt-0', className)}
		{...properties}
	/>
));
CardFooter.displayName = 'CardFooter';

export {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
};

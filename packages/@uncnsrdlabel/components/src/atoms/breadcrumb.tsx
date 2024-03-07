import {ChevronRightIcon} from '@heroicons/react/24/outline';
import * as React from 'react';
import {cn, getValidChildren} from '@uncnsrdlabel/lib';

export type BreadcrumbProps = {
	/* The visual separator between each breadcrumb item */
	separator?: React.ReactNode;
	/**
   * If `true`, adds a separator between each breadcrumb item.
   * @default true
   */
	addSeparator?: boolean;
} & React.ComponentPropsWithoutRef<'nav'>;

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
	(
		{
			children,
			className,
			separator = <ChevronRightIcon className='h-4 w-4' />,
			addSeparator = true,
			...properties
		},
		forwardedReference,
	) => {
		const validChildren = getValidChildren(children);
		const clones = validChildren.map((child, index) => React.cloneElement(child, {
			addSeparator,
			separator,
			isLastChild: validChildren.length === index + 1,
		}));

		return (
			<nav
				className={cn('relative break-words', className)}
				aria-label='breadcrumb'
				{...properties}
				ref={forwardedReference}
			>
				<ol className='flex items-center'>{clones}</ol>
			</nav>
		);
	},
);
Breadcrumb.displayName = 'Breadcrumb';

export type BreadcrumbItemProps = {
	/**
   * If `true`, indicates that the breadcrumb item is active, adds
   * `aria-current=page` and renders a `span`
   */
	isCurrentPage?: boolean;
	isLastChild?: boolean;
} & BreadcrumbProps;

export const BreadcrumbItem = React.forwardRef<
HTMLLIElement,
BreadcrumbItemProps
>(
	(
		{
			children,
			className,
			isCurrentPage,
			isLastChild,
			separator,
			addSeparator,
			...properties
		},
		forwardedReference,
	) => {
		const validChildren = getValidChildren(children);
		const clones = validChildren.map(child => {
			if (child.type === BreadcrumbLink) {
				return React.cloneElement(child, {isCurrentPage});
			}

			if (child.type === BreadcrumbSeparator) {
				return React.cloneElement(child, {
					children: separator || child.props.children,
				});
			}

			return child;
		});

		return (
			<li
				className={cn('inline-flex items-center', className)}
				{...properties}
				ref={forwardedReference}
			>
				{clones}
				{!isLastChild && addSeparator && (
					<BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
				)}
			</li>
		);
	},
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

export type BreadcrumbLinkProps = {
	as?: React.ElementType;
} & React.ComponentPropsWithoutRef<'a'> & Pick<BreadcrumbItemProps, 'isCurrentPage'>;

export const BreadcrumbLink = React.forwardRef<
HTMLAnchorElement,
BreadcrumbLinkProps
>(({className, as: asComp, isCurrentPage, ...properties}, forwardedReference) => {
	const Comp = (isCurrentPage ? 'span' : asComp || 'a') as 'a';

	return (
		<Comp
			className={cn(
				'text-sm font-medium underline-offset-4 aria-[current]:opacity-60 [&:not([aria-current])]:hover:underline',
				className,
			)}
			aria-current={isCurrentPage ? 'page' : undefined}
			{...properties}
			ref={forwardedReference}
		/>
	);
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

export type BreadcrumbSeparatorProps = React.ComponentPropsWithoutRef<'span'>;

export const BreadcrumbSeparator = React.forwardRef<
HTMLSpanElement,
BreadcrumbSeparatorProps
>(({className, ...properties}, forwardedReference) => (
	<span
		className={cn('mx-2 opacity-50', className)}
		role='presentation'
		{...properties}
		ref={forwardedReference}
	/>
));
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

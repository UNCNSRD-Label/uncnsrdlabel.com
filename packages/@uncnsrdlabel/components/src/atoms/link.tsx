import NextLink, {type LinkProps as NextLinkProperties} from 'next/link';
import {type AnchorHTMLAttributes, type PropsWithChildren, forwardRef} from 'react';

export type LinkProps = PropsWithChildren<
{
	className?: string;
	redirect?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
NextLinkProperties
>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
	function Link(properties, reference) {
		const {redirect = true, ...rest} = properties;

		if (redirect) {
			if (rest.href.hasOwnProperty('pathname')) {
				const url = new URL(rest.href as string);
				url.pathname = url.pathname.replace('shop.', 'www.');
				url.pathname = url.pathname.replace(
					'https://www.uncnsrdlabel.com/',
					'/',
				);
				rest.href = url.toString();
			}

			if (typeof rest.href === 'string') {
				rest.href = rest.href.replace('shop.', 'www.');
				rest.href = rest.href.replace('https://www.uncnsrdlabel.com/', '/');
			}
		}

		return <NextLink ref={reference} {...rest} />;
	},
);

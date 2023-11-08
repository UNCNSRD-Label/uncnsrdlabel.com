import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren, forwardRef } from 'react';

export type LinkProps = PropsWithChildren<{
  className?: string;
  redirect?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps>

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  props,
  ref,
) {
  const { redirect = true, ...rest } = props;

  if (redirect) {
    if(rest.href.hasOwnProperty('pathname')) {
      const url = new URL(rest.href as string);
      url.pathname = url.pathname.replace('shop.', 'www.');
      rest.href = url.toString();
    }

    if(typeof rest.href === 'string') {
      rest.href = rest.href.replace('shop.', 'www.');
    }
  }

  return <NextLink ref={ref} {...rest} />;
})
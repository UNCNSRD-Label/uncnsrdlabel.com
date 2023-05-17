import Link from 'next/link';
import { Suspense } from 'react';

import Cart from 'components/cart';
import CartIcon from 'components/icons/cart';
import LogotypeIcon from 'components/icons/logotype';
import { getMenu } from 'lib/shopify';
import { SlHeart, SlMagnifier, SlUser } from 'react-icons/sl';
import SidebarMenu from './sidebar-menu';

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <>
      <div className="flex w-1/3 justify-self-center md:justify-self-start">
        <div className="md:mr-4">
          <Suspense fallback={<CartIcon className="h-6" />}>
            {/* @ts-expect-error Server Component */}
            <SidebarMenu menu={menu} />
          </Suspense>
        </div>
      </div>
      <div className="hidden w-1/3 md:block">
        <Link href="/" aria-label="Go back home" className="justify-center md:flex">
          <LogotypeIcon className="h-12 transition-transform hover:scale-110" />
        </Link>
      </div>

      <div className="flex w-1/3 justify-end gap-4">
        <Suspense fallback={<CartIcon className="h-6" />}>
          <Link href="/search" aria-label="Search">
            <SlMagnifier className="h-6 w-8" />
          </Link>
          <Link href="/account" aria-label="Account">
            <SlUser className="h-6 w-8" />
          </Link>
          <Link href="/account/wishlist" aria-label="Wishlist">
            <SlHeart className="h-6 w-8" />
          </Link>
          {/* @ts-expect-error Server Component */}
          <Cart />
        </Suspense>
      </div>
    </>
  );
}

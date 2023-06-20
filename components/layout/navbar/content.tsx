import Link from "next/link";
import { Suspense } from "react";

import Cart from "components/cart";
import CartIcon from "components/icons/cart";
import Search from "components/search";
import { getMenu } from "lib/shopify";
import { SlHeart, SlUser } from "react-icons/sl";
import SidebarMenu from "./sidebar-menu";

export default async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <>
      <div className="pointer-events-auto flex w-1/3">
        <div className="md:mr-4">
          <Suspense fallback={<CartIcon className="h-6" />}>
            <SidebarMenu menu={menu} />
          </Suspense>
        </div>
      </div>

      <div className="pointer-events-auto flex w-1/3 items-center justify-end gap-5">
        <Suspense fallback={<CartIcon className="icon fill h-6" />}>
          {/* @ts-expect-error Server Component */}
          <Search />
          <Link href="/account" aria-label="Account">
            <SlUser className="icon fill h-5 w-5 drop-shadow" />
          </Link>
          <Link href="/account/wishlist" aria-label="Wishlist">
            <SlHeart className="icon fill h-5 w-5 drop-shadow" />
          </Link>
          {/* @ts-expect-error Server Component */}
          <Cart />
        </Suspense>
      </div>
    </>
  );
}

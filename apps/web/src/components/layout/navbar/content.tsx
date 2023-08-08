import { clsx } from "clsx";
import Link from "next/link";
import { Suspense } from "react";

import { Cart } from "@/components/cart";
import { CartIcon } from "@/components/icons/cart";
import { LogotypeIcon } from "@/components/icons/logotype";
import { Search } from "@/components/search/index";
import { getMenu } from "@uncnsrdlabel/graphql-shopify-storefront/utilities";
import { SlHeart, SlUser } from "react-icons/sl";
import { SidebarMenu } from "./sidebar-menu";

type Props = { showLogo?: boolean };

export async function NavbarContent(props: Props) {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <>
      <div className="flex md:justify-self-start">
        <div className="pointer-events-auto md:mr-4">
          <Suspense fallback={<CartIcon className="h-6" />}>
            <SidebarMenu menu={menu} />
          </Suspense>
        </div>
      </div>
      <div
        className={clsx("hidden", props.showLogo && "md:block")}
        tabIndex={-1}
      >
        <Link
          href="/"
          aria-label="Go back home"
          className="pointer-events-auto justify-center md:flex"
        >
          <LogotypeIcon className="h-10 drop-shadow transition duration-300 ease-in-out hover:scale-110" />
        </Link>
      </div>

      <div className="pointer-events-auto flex items-center justify-end gap-5">
        <Suspense fallback={<CartIcon className="icon fill h-6" />}>
          <Search />
          <Link href="/account" aria-label="Account" prefetch={false}>
            <SlUser className="icon fill h-5 w-5 drop-shadow" />
          </Link>
          <Link href="#" aria-label="Wishlist">
            <SlHeart className="icon fill h-5 w-5 drop-shadow" />
          </Link>
          <Cart />
        </Suspense>
      </div>
    </>
  );
}

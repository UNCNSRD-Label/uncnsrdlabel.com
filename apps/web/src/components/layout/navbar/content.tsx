import { Cart } from "@/components/cart";
import { OpenCart } from "@/components/cart/open-cart";
import { LogotypeIcon } from "@/components/icons/logotype";
import { MenuIcon } from "@/components/icons/menu";
import { Search } from "@/components/search/index";
import { getDictionary } from "@/lib/dictionary";
import { state$ } from "@/lib/store";
import { createIntl } from "@formatjs/intl";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  getMenuHandler
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense } from "react";
import { SlHeart, SlUser } from "react-icons/sl";
import { type ResolvedIntlConfig } from "react-intl";
import { SidebarMenu } from "./sidebar-menu";

export async function NavbarContent({
  lang = state$.lang.get(),
  showLogo = false,
}: { lang: Intl.BCP47LanguageTag; showLogo?: boolean }) {
  const messages: ResolvedIntlConfig["messages"] = await getDictionary({ lang });

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const menu = await getMenuHandler({
    variables: { handle: "next-js-frontend-header-menu" },
    lang,
  });

  return (
    <>
      <div className="flex md:justify-self-start">
        <div className="pointer-events-auto md:mr-4">
          <Suspense
            fallback={
              <MenuIcon className="icon h-5 stroke-inherit drop-shadow" />
            }
          >
            <SidebarMenu getDictionary={getDictionary} lang={lang} menu={menu} />
          </Suspense>
        </div>
      </div>

      <div className={cn("hidden", showLogo && "md:block")} tabIndex={-1}>
        <Link
          aria-label={intl.formatMessage({ id: "component.NavbarContent.link-home" })}
          className="pointer-events-auto justify-center md:flex"
          href="/"
        >
          <LogotypeIcon className="h-10 drop-shadow transition duration-300 ease-in-out hover:scale-110" />
        </Link>
      </div>

      <div className="pointer-events-auto flex items-center justify-end gap-5">
        <Search />
        <Link
          href="/account"
          aria-label={intl.formatMessage({ id: "component.NavbarContent.link-account" })}
          prefetch={false}
        >
          <SlUser className="icon fill h-5 w-5 drop-shadow" />
        </Link>
        {process.env.NEXT_PUBLIC_FEATURE_FLAG_WISHLIST_ENABLE === "true" && (
          <Link
            href="#"
            aria-label={intl.formatMessage({ id: "component.NavbarContent.link-wishlist" })}
          >
            <SlHeart className="icon fill h-5 w-5 drop-shadow" />
          </Link>
        )}
        <Suspense fallback={<OpenCart />}>
          <Cart getDictionary={getDictionary} />
        </Suspense>
      </div>
    </>
  );
}

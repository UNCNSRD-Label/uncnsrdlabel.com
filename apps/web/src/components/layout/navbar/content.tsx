import { Cart } from "@/components/cart";
import { OpenCart } from "@/components/cart/open-cart";
import { LogotypeIcon } from "@/components/icons/logotype";
import { MenuIcon } from "@/components/icons/menu";
import { Search } from "@/components/search/index";
import { getDictionary } from "@/lib/dictionary";
import { createIntl } from "@formatjs/intl";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import { getMenuHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense } from "react";
import { SlHeart } from "react-icons/sl";
import { type ResolvedIntlConfig } from "react-intl";
import { NavbarAccount } from "./account";
import { SidebarMenu } from "./sidebar-menu";

export async function NavbarContent({
  lang,
  showLogo = false,
}: {
  lang: Intl.BCP47LanguageTag;
  showLogo?: boolean;
}) {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

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
      <Suspense fallback={<MenuIcon className="icon h-5 stroke-inherit" />}>
        <SidebarMenu dictionary={dictionary} lang={lang} menu={menu} />
      </Suspense>

      <Link
        aria-label={intl.formatMessage({
          id: "component.NavbarContent.link-home",
        })}
        className={cn("pointer-events-auto hidden justify-center md:flex", {
          "md:block": showLogo,
        })}
        href="/"
      >
        <LogotypeIcon className="h-10 transition duration-300 ease-in-out hover:scale-110" />
      </Link>

      <div className="pointer-events-auto flex items-center justify-end gap-4">
        <Suspense fallback={null}>
          <Search dictionary={dictionary} lang={lang} />
        </Suspense>

        <Suspense fallback={null}>
          <NavbarAccount dictionary={dictionary} lang={lang} />
        </Suspense>

        {process.env.NEXT_PUBLIC_FEATURE_FLAG_WISHLIST_ENABLE === "true" && (
          <Link
            href="#"
            aria-label={intl.formatMessage({
              id: "component.NavbarContent.link-wishlist",
            })}
          >
            <SlHeart className="icon fill h-5 w-5" />
          </Link>
        )}

        <Suspense fallback={<OpenCart />}>
          <Cart dictionary={dictionary} lang={lang} />
        </Suspense>
      </div>
    </>
  );
}

"use client";

import { signOutOfUserAccount } from "@/lib/shopify";
import { createIntl } from "@formatjs/intl";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@uncnsrdlabel/components/atoms/dropdown-menu";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  customerFragment,
  customerQuery,
  getFragmentData,
  getShopifyGraphQL,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getQueryKey } from "@uncnsrdlabel/lib";
import { getCookie } from "cookies-next";
import { useRouter } from 'next/navigation';
import { Usable, use } from "react";
import { SlUser } from "react-icons/sl";
import { type ResolvedIntlConfig } from "react-intl";
import { useTrack } from "use-analytics";

export function NavbarAccount({
  dictionary,
  lang,
}: {
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const router = useRouter();

  const track = useTrack();

  let customerAccessToken = undefined;

  if (typeof window !== "undefined") {
    customerAccessToken = getCookie("customerAccessToken");
  }

  const variables = {
    customerAccessToken,
  } as { customerAccessToken: string };

  const queryKey = getQueryKey(customerQuery, variables);

  const { data } = useQuery({
    enabled: !!customerAccessToken,
    queryKey,
    queryFn: () => getShopifyGraphQL(customerQuery, variables),
  });

  const customer = getFragmentData(customerFragment, data?.customer);

  if (!customer) {
    return (
      <Link
        className="flex items-center gap-2 whitespace-nowrap"
        href="/account"
        aria-label={intl.formatMessage({
          id: "component.NavbarContent.link-account",
        })}
        prefetch={false}
      >
        <SlUser className="icon fill h-5 w-5" />
      </Link>
    );
  }

  return (
    <DropdownMenu
      onOpenChange={(open) =>
        track("navbar_account_dropdown_menu_change", { open })
      }
    >
      <DropdownMenuTrigger>
        <SlUser className="icon fill h-5 w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        collisionPadding={32}
        sideOffset={16}
        className="sm:bg-light rounded-none border-none p-4"
      >
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {customer?.displayName ?? customer?.firstName}
            </p>
            <p className="text-muted-foreground text-xs leading-none">
              {customer?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-300 mx-2" />
        <DropdownMenuItem>
          <Link
            className="flex items-center gap-2 whitespace-nowrap"
            href="/account/profile"
            aria-label={intl.formatMessage({
              id: "component.NavbarContent.account.profile",
            })}
            prefetch={false}
          >
            {intl.formatMessage({
              id: "component.NavbarContent.account.profile",
            })}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            className="flex items-center gap-2 whitespace-nowrap"
            href="/account/addresses"
            aria-label={intl.formatMessage({
              id: "component.NavbarContent.account.addresses",
            })}
            prefetch={false}
          >
            {intl.formatMessage({
              id: "component.NavbarContent.account.addresses",
            })}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            className="flex items-center gap-2 whitespace-nowrap"
            href="/account/orders"
            aria-label={intl.formatMessage({
              id: "component.NavbarContent.account.orders",
            })}
            prefetch={false}
          >
            {intl.formatMessage({
              id: "component.NavbarContent.account.orders",
            })}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-300 mx-2" />
        <DropdownMenuItem>
          <Button
            className="hover:no-underline"
            onClick={() =>
              signOutOfUserAccount({
                router,
                successMessage: intl.formatMessage({
                  id: "component.NavbarContent.account.sign-out",
                }),
              })
            }
            variant="link"
          >
            {intl.formatMessage({
              id: "component.NavbarContent.account.sign-out",
            })}
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import { signOutOfUserAccount } from "@/lib/shopify";
import { createIntl } from "@formatjs/intl";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@uncnsrdlabel/components/atoms/card";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import { cn } from "@uncnsrdlabel/lib";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import { Usable, use } from "react";
import { type ResolvedIntlConfig } from "react-intl";

export function Nav({
  className,
  dictionary,
  lang,
}: {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
}) {
  const segments = useSelectedLayoutSegments();

  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const router = useRouter();

  const listItems = [
    {
      href: "/account/addresses",
      id: "layout.account.nav.addresses",
    },
    {
      href: "/account/orders",
      id: "layout.account.nav.orders",
    },
    {
      href: "/account/profile",
      id: "layout.account.nav.profile",
    },
  ];

  const [handle] = segments;

  return (
    <div
      className={cn(
        "sm:bg-opaque-white relative h-fit content-start px-4 sm:p-8 md:grid",
        className,
      )}
    >
      <Card className="bg-transparent p-4">
        <CardHeader className="grid gap-4">
          <h2 className="text-sm uppercase">
            {intl.formatMessage({
              id: "layout.account.nav.title",
            })}
          </h2>
        </CardHeader>
        <CardContent className="grid content-start gap-4">
          <nav className="grid list-none gap-4">
            {listItems.map((listItem) => (
              <li key={listItem.href}>
                <Link
                  className={cn(
                    "text-xs uppercase transition duration-150 ease-in-out",
                    {
                      "underline decoration-dotted underline-offset-8":
                        listItem.href.endsWith(handle),
                    },
                  )}
                  href={listItem.href}
                >
                  {intl.formatMessage({
                    id: listItem.id,
                  })}
                </Link>
              </li>
            ))}
            <li>
              <hr />
            </li>
            <li>
              <Button
                className="p-0 uppercase"
                onClick={() =>
                  signOutOfUserAccount({
                    router,
                    successMessage: intl.formatMessage({
                      id: "layout.account.nav.sign-out.toast.success",
                    }),
                  })
                }
                size="xs"
                variant="ghost"
              >
                {intl.formatMessage({
                  id: "layout.account.nav.sign-out.button",
                })}
              </Button>
            </li>
          </nav>
        </CardContent>
      </Card>
    </div>
  );
}

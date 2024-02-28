"use client";

import { signOutOfUserAccount } from "@/lib/shopify";
import { createIntl } from "@formatjs/intl";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import { Card, CardContent, CardHeader } from "@uncnsrdlabel/components/atoms/card";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import { cn } from "@uncnsrdlabel/lib";
import { useRouter } from "next/navigation";
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
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const router = useRouter();

  return (
    <div
      className={cn(
        "bg-opaque-white relative h-fit content-start p-10 sm:p-8 md:grid",
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
          <nav className="list-none grid gap-4">
            <li>
              <Link
                className={cn(
                  "text-xs uppercase transition duration-150 ease-in-out",
                  // {
                  //   "underline decoration-dotted underline-offset-8":
                  //     item.url?.endsWith(handle),
                  // },
                )}
                href="/account/addresses"
              >
                Addresses
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  "text-xs uppercase transition duration-150 ease-in-out",
                  // {
                  //   "underline decoration-dotted underline-offset-8":
                  //     item.url?.endsWith(handle),
                  // },
                )}
                href="/account/orders"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  "text-xs uppercase transition duration-150 ease-in-out",
                  // {
                  //   "underline decoration-dotted underline-offset-8":
                  //     item.url?.endsWith(handle),
                  // },
                )}
                href="/account/details"
              >
                My details
              </Link>
            </li>
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

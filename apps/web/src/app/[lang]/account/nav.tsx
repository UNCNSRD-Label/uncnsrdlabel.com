"use client";

import { signOutOfUserAccount } from "@/lib/shopify";
import { createIntl } from "@formatjs/intl";
import { Button } from "@uncnsrdlabel/components/atoms/button";
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
    <nav
      className={cn(
        "md:min-h-fullMinusNavbar relative hidden content-start md:grid md:justify-center",
        className,
      )}
    >
      <dl className="bg-opaque-white grid content-start gap-4 md:sticky md:mb-64 lg:shadow">
        <dt className="text-sm uppercase">
          {intl.formatMessage({
            id: "layout.account.nav.title",
          })}
        </dt>
        <dd>
          <Link
            className={cn(
              "sm:text-xxs text-xs uppercase transition duration-150 ease-in-out",
              // {
              //   "underline decoration-dotted underline-offset-8":
              //     item.url?.endsWith(handle),
              // },
            )}
            href="/account/addresses"
          >
            Addresses
          </Link>
        </dd>
        <dd>
          <Link
            className={cn(
              "sm:text-xxs text-xs uppercase transition duration-150 ease-in-out",
              // {
              //   "underline decoration-dotted underline-offset-8":
              //     item.url?.endsWith(handle),
              // },
            )}
            href="/account/orders"
          >
            Orders
          </Link>
        </dd>
        <dd>
          <Link
            className={cn(
              "sm:text-xxs text-xs uppercase transition duration-150 ease-in-out",
              // {
              //   "underline decoration-dotted underline-offset-8":
              //     item.url?.endsWith(handle),
              // },
            )}
            href="/account/update-details"
          >
            My details
          </Link>
        </dd>
        <dd>
        <hr />
        </dd>
        <dd>
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
        </dd>
      </dl>
    </nav>
  );
}

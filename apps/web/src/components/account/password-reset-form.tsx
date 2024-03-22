"use client";

import { createIntl } from "@formatjs/intl";
import { useDebouncedEffect } from "@react-hookz/web";
import { getShopifyCookies } from "@shopify/hydrogen-react";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@uncnsrdlabel/components/atoms/card";
import { Input } from "@uncnsrdlabel/components/atoms/input";
import { Label } from "@uncnsrdlabel/components/atoms/label";
import { Usable, use } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { type ResolvedIntlConfig } from "react-intl";
import { toast } from "sonner";
import { usePage } from "use-analytics";
import { resetAccountAction } from "./action";

function Submit({
  className,
  dictionary,
  lang,
}: {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Navigator['language'];
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const { pending } = useFormStatus();

  return (
    <Button className={className} disabled={pending} size="base" variant="default">
      {intl.formatMessage({
        id: "component.AccountResetForm.submit",
      })}
    </Button>
  );
}

export function AccountResetForm({
  className,
  dictionary,
  lang,
}: {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Navigator['language'];
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const [state, resetAccount] = useFormState(resetAccountAction, null);

  const hasError = (state && state.status > 299) ?? false;

  const page = usePage();

  useDebouncedEffect(
    () => {
      if (hasError) {
        toast.error(
          intl.formatMessage({
            id: "component.AccountResetForm.toast.error",
          }),
          {
            description: intl.formatMessage({ id: state?.messageKey }),
          },
        );
      }
    },
    [hasError, state?.messageKey],
    200,
    500,
  );

  useDebouncedEffect(
    () => {
      if (state?.ok) {
        toast.success(
          intl.formatMessage({
            id: "component.AccountResetForm.toast.success",
          }),
          {
            description: intl.formatMessage({ id: state?.messageKey }),
          },
        );

        page({
          pageType: "customersResetPassword"
        });
      }
    },
    [state?.ok],
    200,
    500,
  );

  let _shopify_y = undefined;

  if (typeof window !== "undefined") {
    const shopifyCookies = getShopifyCookies(document.cookie);

    _shopify_y = shopifyCookies._shopify_y;
  }

  return (
    <Card className={className}>
      <form action={resetAccount} className="grid gap-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">
            {intl.formatMessage({
              id: "component.AccountResetForm.submit",
            })}
          </CardTitle>
          <CardDescription>
            {intl.formatMessage({
              id: "component.AccountResetForm.description",
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input autoComplete="email" id="email" name="email" type="email" placeholder="me@example.com" />
          </div>
          <Submit className="mt-4 w-full" dictionary={dictionary} lang={lang} />
        </CardContent>
        <CardFooter className="text-xs">
          Enter the details above to reset your account
        </CardFooter>
        <input type="hidden" name="_shopify_y" value={_shopify_y} />
      </form>
    </Card>
  );
}

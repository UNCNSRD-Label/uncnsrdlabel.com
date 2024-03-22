"use client";

import { createIntl } from "@formatjs/intl";
import { useDebouncedEffect } from "@react-hookz/web";
import { getShopifyCookies } from "@shopify/hydrogen-react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@uncnsrdlabel/components/atoms/card";
import { Checkbox } from "@uncnsrdlabel/components/atoms/checkbox";
import { Input } from "@uncnsrdlabel/components/atoms/input";
import { Label } from "@uncnsrdlabel/components/atoms/label";
import {
    customerFragment,
    customerQuery,
    getFragmentData,
    getShopifyGraphQL,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getQueryKey } from "@uncnsrdlabel/lib";
import { getCookie } from "cookies-next";
import { Usable, use, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { type ResolvedIntlConfig } from "react-intl";
import { toast } from "sonner";
import { updateAccountAction } from "./action";

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
        id: "component.AccountEditForm.submit",
      })}
    </Button>
  );
}

export function AccountEditForm({
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

  const [state, updateAccount] = useFormState(updateAccountAction, null);

  const hasError = (state && state.status > 299) ?? false;

  useDebouncedEffect(
    () => {
      if (hasError) {
        toast.error(
          intl.formatMessage({
            id: "component.AccountEditForm.toast.error",
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
            id: "component.AccountEditForm.toast.success",
          }),
          {
            description: intl.formatMessage({ id: state?.messageKey }),
          },
        );
      }
    },
    [state?.ok],
    200,
    500,
  );

  let _shopify_y = undefined;

  let customerAccessToken = undefined;

  if (typeof window !== "undefined") {
    const shopifyCookies = getShopifyCookies(document.cookie);

    _shopify_y = shopifyCookies._shopify_y;

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

  const [acceptsMarketing, setAcceptsMarketing] = useState<
    boolean | "indeterminate"
  >(customer?.acceptsMarketing ?? false);

  useEffect(() => {
    setAcceptsMarketing(customer?.acceptsMarketing ?? false);
  }, [customer?.acceptsMarketing]);

  return (
    <Card className={className}>
      <form action={updateAccount} className="grid gap-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">
            {intl.formatMessage({
              id: "component.AccountEditForm.card.title",
            })}
          </CardTitle>
          <CardDescription>
            {intl.formatMessage({
              id: "component.AccountEditForm.card.description",
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <Label htmlFor="email">
              {intl.formatMessage({
                id: "component.AccountEditForm.field.email",
              })}
            </Label>
            <Input
              autoComplete="email"
              defaultValue={customer?.email ?? undefined}
              id="email"
              name="email"
              placeholder="me@example.com"
              required
              type="email"
            />
          </div>
          <div>
            <Label htmlFor="firstName">
              {intl.formatMessage({
                id: "component.AccountEditForm.field.firstName",
              })}
            </Label>
            <Input
              autoComplete="given-name"
              defaultValue={customer?.firstName ?? undefined}
              id="firstName"
              name="firstName"
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="lastName">
              {intl.formatMessage({
                id: "component.AccountEditForm.field.lastName",
              })}
            </Label>
            <Input
              autoComplete="family-name"
              defaultValue={customer?.lastName ?? undefined}
              id="lastName"
              name="lastName"
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="phone">
              {intl.formatMessage({
                id: "component.AccountEditForm.field.phone",
              })}
            </Label>
            <Input
              autoComplete="phone"
              defaultValue={customer?.phone ?? undefined}
              id="phone"
              name="phone"
              required
              type="text"
            />
          </div>
          <div className="flex content-center">
            <Checkbox
              checked={acceptsMarketing}
              onCheckedChange={(checked) => setAcceptsMarketing(checked)}
              id="acceptsMarketing"
              name="acceptsMarketing"
            />
            <Label className="ml-2 text-xs" htmlFor="acceptsMarketing">
              {intl.formatMessage({
                id: "component.AccountEditForm.field.acceptsMarketing",
              })}
            </Label>
          </div>
          <Submit className="w-full" dictionary={dictionary} lang={lang} />
        </CardContent>
        <CardFooter className="grid grid-flow-col justify-start gap-4 text-sm">
          
        </CardFooter>
        <input type="hidden" name="_shopify_y" value={_shopify_y} />
      </form>
    </Card>
  );
}

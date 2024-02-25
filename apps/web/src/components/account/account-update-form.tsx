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
  getCustomerQuery,
  getFragmentData,
  getShopifyGraphQL,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getQueryKey } from "@uncnsrdlabel/lib";
import { getCookie } from "cookies-next";
import { Usable, use } from "react";
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
  lang: Intl.BCP47LanguageTag;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const { pending } = useFormStatus();

  return (
    <Button className={className} disabled={pending} variant="default">
      {intl.formatMessage({
        id: "component.UpdateAccountForm.submit",
      })}
    </Button>
  );
}

export function UpdateAccountForm({
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

  const [state, updateAccount] = useFormState(updateAccountAction, null);

  const hasError = (state && state.status > 299) ?? false;

  useDebouncedEffect(
    () => {
      if (hasError) {
        toast.error(
          intl.formatMessage({
            id: "component.UpdateAccountForm.toast.error",
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
            id: "component.UpdateAccountForm.toast.success",
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

  const queryKey = getQueryKey(getCustomerQuery, variables);

  const {
    data, error, isError, isLoading
  } = useQuery({
    enabled: !!customerAccessToken,
    queryKey,
    queryFn: () => getShopifyGraphQL(getCustomerQuery, variables),
    // staleTime: 5 * 1000,
  });

  console.log(data, error, isError, isLoading);

  const customer = getFragmentData(customerFragment, data?.customer);

  console.log({customer})

  return (
    <Card className={className}>
      <form action={updateAccount} className="grid gap-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">
            {intl.formatMessage({
              id: "component.UpdateAccountForm.submit",
            })}
          </CardTitle>
          <CardDescription>
            {intl.formatMessage({
              id: "component.UpdateAccountForm.description",
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <Label htmlFor="email">
              {intl.formatMessage({
                id: "component.UpdateAccountForm.email",
              })}
            </Label>
            <Input
              autoComplete="email"
              defaultValue={customer?.email}
              id="email"
              name="email"
              placeholder="me@example.com"
              required
              type="email"
            />
          </div>
          <div>
            <Label htmlFor="password">
              {intl.formatMessage({
                id: "component.UpdateAccountForm.password",
              })}
            </Label>
            <Input
              autoComplete="new-password"
              id="password"
              name="password"
              required
              type="password"
            />
          </div>
          <div>
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              autoComplete="new-password"
              id="confirm-password"
              name="confirm-password"
              required
              type="password"
            />
          </div>
          <div>
            <Label htmlFor="firstName">
              {intl.formatMessage({
                id: "component.UpdateAccountForm.firstName",
              })}
            </Label>
            <Input
              autoComplete="given-name"
              id="firstName"
              name="firstName"
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="lastName">
              {intl.formatMessage({
                id: "component.UpdateAccountForm.lastName",
              })}
            </Label>
            <Input
              autoComplete="family-name"
              id="lastName"
              name="lastName"
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="phone">
              {intl.formatMessage({
                id: "component.UpdateAccountForm.phone",
              })}
            </Label>
            <Input
              autoComplete="phone"
              id="phone"
              name="phone"
              required
              type="text"
            />
          </div>
          <div>
            <Checkbox id="acceptsMarketing" name="acceptsMarketing" />
            <Label htmlFor="acceptsMarketing">
              {intl.formatMessage({
                id: "component.UpdateAccountForm.acceptsMarketing",
              })}
            </Label>
          </div>
          <Submit className="mt-4 w-full" dictionary={dictionary} lang={lang} />
        </CardContent>
        <CardFooter className="flex justify-center text-sm">
          <div className="flex justify-center gap-2 text-sm">
            <span>Already have an account?</span>
          </div>
        </CardFooter>
        <input type="hidden" name="_shopify_y" value={_shopify_y} />
      </form>
    </Card>
  );
}

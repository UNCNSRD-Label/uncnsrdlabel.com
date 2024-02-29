"use client";

import { createIntl } from "@formatjs/intl";
import { useDebouncedEffect } from "@react-hookz/web";
import { parseGid } from "@shopify/hydrogen";
import { getShopifyCookies } from "@shopify/hydrogen-react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@uncnsrdlabel/components/atoms/card";
import { Input } from "@uncnsrdlabel/components/atoms/input";
import { Label } from "@uncnsrdlabel/components/atoms/label";
import {
  customerFragment,
  customerQuery,
  getFragmentData,
  getShopifyGraphQL,
  mailingAddressFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getQueryKey } from "@uncnsrdlabel/lib";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { Usable, use } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { type ResolvedIntlConfig } from "react-intl";
import { toast } from "sonner";

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
    <Button className={className} disabled={pending} size="base" variant="default">
      {intl.formatMessage({
        id: "component.OrdersEditForm.action.submit",
      })}
    </Button>
  );
}

export function OrdersEditForm({
  action,
  className,
  dictionary,
  id,
  lang,
}: {
  action: FormAction;
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  id: string;
  lang: Intl.BCP47LanguageTag;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const router = useRouter();

  const [state, payload] = useFormState(action, null);

  const hasError = (state && state.status > 299) ?? false;

  useDebouncedEffect(
    () => {
      if (hasError) {
        router.push("/account/orders");

        toast.error(
          intl.formatMessage({
            id: "component.OrdersEditForm.toast.error",
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
        router.push("/account/orders");

        toast.success(
          intl.formatMessage({
            id: "component.OrdersEditForm.toast.success",
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

  const order = customer?.orders.nodes
    .map((node) => getFragmentData(mailingAddressFragment, node))
    .find((order) => parseGid(order.id.split("?").shift()).id === id);

  return (
    <Card className={className}>
      <form action={payload} className="grid gap-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">
            {intl.formatMessage({
              id: "component.OrdersEditForm.card.title",
            })}
          </CardTitle>
          <CardDescription>
            {intl.formatMessage({
              id: "component.OrdersEditForm.card.description",
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8">
          <fieldset>
            <div>
              <Label htmlFor="firstName">
                {intl.formatMessage({
                  id: "component.OrdersEditForm.field.firstName",
                })}
              </Label>
              <Input
                autoComplete="shipping given-name"
                defaultValue={order?.firstName ?? undefined}
                id="firstName"
                name="firstName"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="lastName">
                {intl.formatMessage({
                  id: "component.OrdersEditForm.field.lastName",
                })}
              </Label>
              <Input
                autoComplete="shipping family-name"
                defaultValue={order?.lastName ?? undefined}
                id="lastName"
                name="lastName"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="phone">
                {intl.formatMessage({
                  id: "component.OrdersEditForm.field.phone",
                })}
              </Label>
              <Input
                autoComplete="shipping phone"
                defaultValue={order?.phone ?? undefined}
                id="phone"
                name="phone"
                required
                type="text"
              />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <Label htmlFor="order1">
                {intl.formatMessage({
                  id: "component.OrdersEditForm.field.order1",
                })}
              </Label>
              <Input
                autoComplete="shipping order-line1"
                defaultValue={order?.order1 ?? undefined}
                id="order1"
                name="order1"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="order2">
                {intl.formatMessage({
                  id: "component.OrdersEditForm.field.order2",
                })}
              </Label>
              <Input
                autoComplete="shipping order-line2"
                defaultValue={order?.order2 ?? undefined}
                id="order2"
                name="order2"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="city">
                {intl.formatMessage({
                  id: "component.OrdersEditForm.field.city",
                })}
              </Label>
              <Input
                autoComplete="shipping order-level2"
                defaultValue={order?.city ?? undefined}
                id="city"
                name="city"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="company">
                {intl.formatMessage({
                  id: "component.OrdersEditForm.field.company",
                })}
              </Label>
              <Input
                autoComplete="shipping organization"
                defaultValue={order?.company ?? undefined}
                id="company"
                name="company"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="province">
                {intl.formatMessage({
                  id: "component.OrdersEditForm.field.province",
                })}
              </Label>
              <Input
                autoComplete="shipping order-level1"
                defaultValue={order?.province ?? undefined}
                id="province"
                name="province"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="zip">
                {intl.formatMessage({
                  id: "component.OrdersEditForm.field.zip",
                })}
              </Label>
              <Input
                autoComplete="shipping postal-code"
                defaultValue={order?.zip ?? undefined}
                id="zip"
                name="zip"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="country">
                {intl.formatMessage({
                  id: "component.OrdersEditForm.field.country",
                })}
              </Label>
              <Input
                autoComplete="shipping country"
                defaultValue={order?.country ?? undefined}
                id="country"
                name="country"
                type="text"
              />
            </div>
          </fieldset>
          <Submit className="w-full" dictionary={dictionary} lang={lang} />
        </CardContent>
        <input type="hidden" name="_shopify_y" value={_shopify_y} />
        <input type="hidden" name="id" value={order?.id} />
      </form>
    </Card>
  );
}

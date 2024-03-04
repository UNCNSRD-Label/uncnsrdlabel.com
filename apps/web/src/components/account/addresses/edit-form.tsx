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
        id: "component.AddressesEditForm.action.submit",
      })}
    </Button>
  );
}

export function AddressesEditForm({
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
        router.push("/account/addresses");

        toast.error(
          intl.formatMessage({
            id: "component.AddressesEditForm.toast.error",
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
        router.push("/account/addresses");

        toast.success(
          intl.formatMessage({
            id: "component.AddressesEditForm.toast.success",
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

  const address = customer?.addresses.nodes
    .map((node) => getFragmentData(mailingAddressFragment, node))
    .find((address) => parseGid(address.id.split("?").shift()).id === id);

  return (
    <Card className={className}>
      <form action={payload} className="grid gap-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">
            {intl.formatMessage({
              id: "component.AddressesEditForm.card.title",
            })}
          </CardTitle>
          <CardDescription>
            {intl.formatMessage({
              id: "component.AddressesEditForm.card.description",
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8">
          <fieldset className="grid gap-4">
            <div>
              <Label htmlFor="firstName">
                {intl.formatMessage({
                  id: "component.AddressesEditForm.field.firstName",
                })}
              </Label>
              <Input
                autoComplete="shipping given-name"
                defaultValue={address?.firstName ?? undefined}
                id="firstName"
                name="firstName"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="lastName">
                {intl.formatMessage({
                  id: "component.AddressesEditForm.field.lastName",
                })}
              </Label>
              <Input
                autoComplete="shipping family-name"
                defaultValue={address?.lastName ?? undefined}
                id="lastName"
                name="lastName"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="phone">
                {intl.formatMessage({
                  id: "component.AddressesEditForm.field.phone",
                })}
              </Label>
              <Input
                autoComplete="shipping phone"
                defaultValue={address?.phone ?? undefined}
                id="phone"
                name="phone"
                required
                type="text"
              />
            </div>
          </fieldset>
          <fieldset className="grid gap-4">
            <div>
              <Label htmlFor="address1">
                {intl.formatMessage({
                  id: "component.AddressesEditForm.field.address1",
                })}
              </Label>
              <Input
                autoComplete="shipping address-line1"
                defaultValue={address?.address1 ?? undefined}
                id="address1"
                name="address1"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="address2">
                {intl.formatMessage({
                  id: "component.AddressesEditForm.field.address2",
                })}
              </Label>
              <Input
                autoComplete="shipping address-line2"
                defaultValue={address?.address2 ?? undefined}
                id="address2"
                name="address2"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="city">
                {intl.formatMessage({
                  id: "component.AddressesEditForm.field.city",
                })}
              </Label>
              <Input
                autoComplete="shipping address-level2"
                defaultValue={address?.city ?? undefined}
                id="city"
                name="city"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="company">
                {intl.formatMessage({
                  id: "component.AddressesEditForm.field.company",
                })}
              </Label>
              <Input
                autoComplete="shipping organization"
                defaultValue={address?.company ?? undefined}
                id="company"
                name="company"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="province">
                {intl.formatMessage({
                  id: "component.AddressesEditForm.field.province",
                })}
              </Label>
              <Input
                autoComplete="shipping address-level1"
                defaultValue={address?.province ?? undefined}
                id="province"
                name="province"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="zip">
                {intl.formatMessage({
                  id: "component.AddressesEditForm.field.zip",
                })}
              </Label>
              <Input
                autoComplete="shipping postal-code"
                defaultValue={address?.zip ?? undefined}
                id="zip"
                name="zip"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="country">
                {intl.formatMessage({
                  id: "component.AddressesEditForm.field.country",
                })}
              </Label>
              <Input
                autoComplete="shipping country"
                defaultValue={address?.country ?? undefined}
                id="country"
                name="country"
                type="text"
              />
            </div>
          </fieldset>
          <Submit className="w-full" dictionary={dictionary} lang={lang} />
        </CardContent>
        <input type="hidden" name="_shopify_y" value={_shopify_y} />
        <input type="hidden" name="id" value={address?.id} />
      </form>
    </Card>
  );
}

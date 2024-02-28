"use client";

import { createIntl } from "@formatjs/intl";
import { useDebouncedEffect } from "@react-hookz/web";
import { parseGid } from "@shopify/hydrogen";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@uncnsrdlabel/components/atoms/card";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  customerAddressFragment,
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
import { deleteAddressAction } from "./action";

export function Addresses({
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

  let customerAccessToken = undefined;

  if (typeof window !== "undefined") {
    customerAccessToken = getCookie("customerAccessToken");
  }

  const variables = {
    customerAccessToken,
  } as { customerAccessToken: string };

  const shopifyQueryClient = useQueryClient();

  const queryKey = getQueryKey(getCustomerQuery, variables);

  const { data } = useQuery({
    enabled: !!customerAccessToken,
    queryKey,
    queryFn: () => getShopifyGraphQL(getCustomerQuery, variables),
  });

  const customer = getFragmentData(customerFragment, data?.customer);

  const { pending } = useFormStatus();

  const [state, deleteAddress] = useFormState(deleteAddressAction, null);

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
        shopifyQueryClient.invalidateQueries({
          queryKey,
        });

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

  return (
    <Card className={className}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          {intl.formatMessage({
            id: "component.Addresses.card.title",
          })}
        </CardTitle>
        <CardDescription>
          {intl.formatMessage({
            id: "component.Addresses.card.description",
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <menu>
          {customer?.addresses?.nodes.map((address) => {
            const customerAddress = getFragmentData(
              customerAddressFragment,
              address,
            );

            const customerAddressId = customerAddress.id.split("?").shift();

            const { id } = parseGid(customerAddressId);

            return (
              <li className="grid gap-4 border-b py-8" key={id}>
                <form action={deleteAddress}>
                  <ul>
                    {customerAddress.formatted.map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                  </ul>
                  <div className="grid gap-4 grid-flow-col justify-end">
                    <Link
                      className="btn btn-bg btn-primary btn-sm"
                      href={`/account/addresses/${id}/update`}
                    >
                      {intl.formatMessage({
                        id: "component.Addresses.actions.updateAddress",
                      })}
                    </Link>
                    <Button variant="destructive" size="sm" value="delete" disabled={pending}>
                      {intl.formatMessage({
                        id: "component.Addresses.actions.deleteAddress",
                      })}
                    </Button>
                  </div>
                  <input type="hidden" name="id" value={customerAddress.id} />
                </form>
              </li>
            );
          })}
        </menu>
      </CardContent>
      <CardFooter className="grid grid-flow-col justify-start gap-4 text-sm">
        <Link
          className="btn btn-bg btn-primary btn-base"
          href="/account/addresses/add"
        >
          {intl.formatMessage({
            id: "component.Addresses.actions.add",
          })}
        </Link>
      </CardFooter>
    </Card>
  );
}

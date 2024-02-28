"use client";

import { createIntl } from "@formatjs/intl";
import { parseGid } from "@shopify/hydrogen";
import { useQuery, useQueryClient } from "@tanstack/react-query";
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
  customerFragment,
  getCustomerQuery,
  getFragmentData,
  getShopifyGraphQL,
  orderFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getQueryKey } from "@uncnsrdlabel/lib";
import { getCookie } from "cookies-next";
import { Usable, use } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { type ResolvedIntlConfig } from "react-intl";
import { deleteOrderAction } from "./action";

export function Orders({
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

  const [deleteOrderState, deleteOrder] = useFormState(
    deleteOrderAction,
    null,
  );

  // const deleteOrderHasError =
  //   (deleteOrderState && deleteOrderState.status > 299) ?? false;

  // useDebouncedEffect(
  //   () => {
  //     if (deleteOrderHasError) {
  //       toast.error(
  //         intl.formatMessage({
  //           id: "component.AccountEditForm.toast.error",
  //         }),
  //         {
  //           description: intl.formatMessage({
  //             id: deleteOrderState?.messageKey,
  //           }),
  //         },
  //       );
  //     }
  //   },
  //   [deleteOrderHasError, deleteOrderState?.messageKey],
  //   200,
  //   500,
  // );

  // useDebouncedEffect(
  //   () => {
  //     if (deleteOrderState?.ok) {
  //       shopifyQueryClient.invalidateQueries({
  //         queryKey,
  //       });

  //       toast.success(
  //         intl.formatMessage({
  //           id: "component.AccountEditForm.toast.success",
  //         }),
  //         {
  //           description: intl.formatMessage({
  //             id: deleteOrderState?.messageKey,
  //           }),
  //         },
  //       );
  //     }
  //   },
  //   [deleteOrderState?.ok],
  //   200,
  //   500,
  // );

  return (
    <Card className={className}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          {intl.formatMessage({
            id: "component.Orders.card.title",
          })}
        </CardTitle>
        <CardDescription>
          {intl.formatMessage({
            id: "component.Orders.card.description",
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <menu>
          {customer?.orders?.nodes.map((order) => {
            const customerOrder = getFragmentData(
              orderFragment,
              order,
            );

            const customerOrderId = customerOrder.id.split("?").shift();

            const { id } = parseGid(customerOrderId);

            return (
              <li className="grid gap-4 border-b py-8" key={id}>
                <form>
                  <h2>{customerOrder.orderNumber}</h2>
                  <div className="mt-8 grid grid-flow-col justify-end gap-4">
                    {/* <Button
                      formAction={setDefaultOrder}
                      className="text-sm flex gap-2"
                      variant="link"
                      value="setDefault"
                      disabled={pending}
                      aria-description={`Set ${customerOrder.formatted} as default order`}
                    >
                      {intl.formatMessage({
                        id: "component.Orders.actions.setDefaultOrder",
                      })}
                    </Button> */}
                    <Link
                      aria-description={`Update ${customerOrder}`}
                      className="text-sm"
                      href={`/account/orders/${id}/update`}
                    >
                      {intl.formatMessage({
                        id: "component.Orders.actions.updateOrder",
                      })}
                    </Link>
                    {/* <Button
                      formAction={deleteOrder}
                      className="text-sm"
                      variant="link"
                      value="delete"
                      disabled={pending}
                      aria-description={`Delete ${customerOrder.formatted}`}
                    >
                      {intl.formatMessage({
                        id: "component.Orders.actions.deleteOrder",
                      })}
                    </Button> */}
                  </div>
                  <input type="hidden" name="id" value={customerOrder.id} />
                </form>
              </li>
            );
          })}
        </menu>
      </CardContent>
      <CardFooter className="grid grid-flow-col justify-start gap-4 text-sm">
        <Link
          className="btn btn-bg btn-primary btn-base"
          href="/account/orders/add"
        >
          {intl.formatMessage({
            id: "component.Orders.actions.add",
          })}
        </Link>
      </CardFooter>
    </Card>
  );
}

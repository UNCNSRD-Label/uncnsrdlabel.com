"use server";

import { CartModal } from "@/components/cart/modal";
import { state$ } from "@/lib/store";
import {
  cartFragment,
  getCartQuery,
  getFragmentData,
  getShopifyGraphQL,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { getInContextVariables } from "@uncnsrdlabel/lib/server";
import { cookies } from "next/headers";

export async function Cart() {
  const cartId = cookies().get("cartId")?.value;

  const lang = state$.lang.get();

  if (!cartId) {
    return null;
  }

  const inContextVariables = getInContextVariables(lang);

  const variables = { ...inContextVariables, cartId };

  const { cart: cartFragmentRef } = await getShopifyGraphQL(
    getCartQuery,
    // @ts-expect-error Argument of type is not assignable to parameter of type
    variables,
  );

  if (cartFragmentRef) {
    const cart = getFragmentData(cartFragment, cartFragmentRef);

    return <CartModal cart={cart} />;
  }

  return null;
}

import { CartModal } from "@/components/cart/modal";
import {
  cartFragment,
  getCartQuery,
  getFragmentData,
  getShopifyGraphQL,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cookies } from "next/headers";

export async function Cart() {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return null;
  }

  const variables = { cartId };

  const { cart: cartFragmentRef } = await getShopifyGraphQL(
    getCartQuery,
    variables,
  );

  if (cartFragmentRef) {
    const cart = getFragmentData(cartFragment, cartFragmentRef);

    return <CartModal cart={cart} />;
  }

  return null;
}

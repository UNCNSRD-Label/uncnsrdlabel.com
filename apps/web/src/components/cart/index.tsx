import { server } from "@/clients/shopify";
import { CartModal } from "@/components/cart/modal";
import {
  FragmentType,
  cartFragment,
  getFragmentData
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cookies } from "next/headers";
import { use } from "react";

export function Cart() {
  const cartId = cookies().get("cartId")?.value;

  let cartFragmentRef: FragmentType<typeof cartFragment> | null = null;

  if (cartId) {
    cartFragmentRef = use(server.getCart({ cartId }));
  }

  if (cartFragmentRef) {
    const cart = getFragmentData(cartFragment, cartFragmentRef);

    return <CartModal cart={cart} />;
  }

  return null;
}

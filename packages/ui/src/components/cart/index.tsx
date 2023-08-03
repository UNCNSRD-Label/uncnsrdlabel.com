import { getCart } from "@uncnsrdlabel/graphql-shopify-storefront/utilities.js";
import { CartModal } from "@uncnsrdlabel/ui/components/cart/modal.js";
import { cookies } from "next/headers";

export async function Cart() {
  const cartId = cookies().get("cartId")?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  if (cart) {
    return <CartModal cart={cart} />;
  }

  return null;
}

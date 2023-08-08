import { CartModal } from "@/components/cart/modal";
import { getCart } from "@uncnsrdlabel/graphql-shopify-storefront/utilities";
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

import { getCart } from "@uncnsrdlabel/lib/shopify";
import { cookies } from "next/headers";
import CartModal from "./modal";

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

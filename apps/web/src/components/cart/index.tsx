import { server } from "@/clients/shopify";
import { CartModal } from "@/components/cart/modal";
import { cookies } from "next/headers";
import { use } from "react";

export function Cart() {
  const cartId = cookies().get("cartId")?.value;

  let cart;

  if (cartId) {
    cart = use(server.getCart({ cartId }));
  }

  if (cart) {
    return <CartModal cart={cart} />;
  }

  return null;
}

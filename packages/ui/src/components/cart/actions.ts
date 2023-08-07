"use server";

import { Cart } from "@uncnsrdlabel/graphql-shopify-storefront/types";
import {
  addToCart,
  createCart,
  getCart,
  removeFromCart,
  updateCart,
} from "@uncnsrdlabel/graphql-shopify-storefront/utilities";
import { cookies } from "next/headers";

export const addItem = async (
  variantId: string | undefined,
): Promise<Error | undefined> => {
  let cartId = cookies().get("cartId")?.value;
  let cart: Cart | undefined;

  if (cartId) {
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart();
    
    if (!cart) {
      return new Error("Error creating cart");
    }

    cartId = cart.id;
    cookies().set("cartId", cartId);
  }

  if (!variantId) {
    return new Error("Missing variantId");
  }
  try {
    await addToCart(cartId, [{ merchandiseId: variantId, quantity: 1 }]);

    return undefined;
  } catch (e) {
    return new Error("Error adding item", { cause: e });
  }
};

export const removeItem = async (
  lineId: string,
): Promise<Error | undefined> => {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return new Error("Missing cartId");
  }
  try {
    await removeFromCart(cartId, [lineId]);

    return undefined;
  } catch (e) {
    return new Error("Error removing item", { cause: e });
  }
};

export const updateItemQuantity = async ({
  lineId,
  variantId,
  quantity,
}: {
  lineId: string;
  variantId: string;
  quantity: number;
}): Promise<Error | undefined> => {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return new Error("Missing cartId");
  }
  try {
    await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId: variantId,
        quantity,
      },
    ]);

    return undefined;
  } catch (e) {
    return new Error("Error updating item quantity", { cause: e });
  }
};

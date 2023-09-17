"use server";

import { server } from "@/clients/shopify";
import {
  FragmentType,
  cartFragment,
  getFragmentData
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cookies } from "next/headers";

export const addItem = async (
  variantId: string | undefined,
): Promise<Error | undefined> => {
  let cartId = cookies().get("cartId")?.value;
  let cartFragmentRef: FragmentType<typeof cartFragment> | null = null;

  if (cartId) {
    cartFragmentRef = await server.getCart({ cartId });
  }

  if (!cartId || !cartFragmentRef) {
    cartFragmentRef = await server.createCart({});

    const cart = getFragmentData(cartFragment, cartFragmentRef);

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
    await server.addToCart({
      cartId,
      lines: [{ merchandiseId: variantId, quantity: 1 }],
    });

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
    await server.removeFromCart({ cartId, lineIds: [lineId] });

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
    await server.updateCart({
      cartId,
      lines: [
        {
          id: lineId,
          merchandiseId: variantId,
          quantity,
        },
      ],
    });

    return undefined;
  } catch (e) {
    return new Error("Error updating item quantity", { cause: e });
  }
};

"use server";

import { state$ } from "@/lib/store";
import {
  FragmentType,
  addToCartHandler,
  cartFragment,
  createCartHandler,
  getCartHandler,
  getFragmentData,
  removeFromCartHandler,
  updateCartHandler,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { cookies } from "next/headers";

export const addItem = async (
  variantId: string | undefined,
): Promise<Error | undefined> => {
  const lang = state$.lang.get();

  let cartId = cookies().get("cartId")?.value;
  let cartFragmentRef: FragmentType<typeof cartFragment> | null = null;

  if (cartId) {
    cartFragmentRef = await getCartHandler({ cartId }, lang);
  }

  if (!cartId || !cartFragmentRef) {
    cartFragmentRef = await createCartHandler(undefined, lang);

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
    await addToCartHandler(
      {
        cartId,
        lines: [{ merchandiseId: variantId, quantity: 1 }],
      },
      lang,
    );

    return undefined;
  } catch (e) {
    return new Error("Error adding item", { cause: e });
  }
};

export const removeItem = async (
  lineId: string,
): Promise<Error | undefined> => {
  const lang = state$.lang.get();

  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return new Error("Missing cartId");
  }

  try {
    await removeFromCartHandler({ cartId, lineIds: [lineId] }, lang);

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
  const lang = state$.lang.get();

  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return new Error("Missing cartId");
  }
  try {
    await updateCartHandler(
      {
        cartId,
        lines: [
          {
            id: lineId,
            merchandiseId: variantId,
            quantity,
          },
        ],
      },
      lang,
    );

    return undefined;
  } catch (e) {
    return new Error("Error updating item quantity", { cause: e });
  }
};

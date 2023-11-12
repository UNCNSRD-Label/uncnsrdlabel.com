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
import { TAGS } from '@uncnsrdlabel/lib/constants';
import { revalidateTag } from 'next/cache';
import { cookies } from "next/headers";

export const addItem = async (
  _prevState: any,
  selectedVariantId: string | undefined,
): Promise<string | undefined> => {
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
      return "Error creating cart";
    }

    cartId = cart.id;

    cookies().set("cartId", cartId);
  }

  if (!selectedVariantId) {
    return "Missing selectedVariantId";
  }

  try {
    await addToCartHandler(
      {
        cartId,
        lines: [{ merchandiseId: selectedVariantId, quantity: 1 }],
      },
      lang,
    );

    revalidateTag(TAGS.cart);
  } catch (e) {
    return "Error adding item to cart";
  }
};

export const removeItem = async (
  _prevState: any,
  lineId: string,
): Promise<string | undefined> => {
  const lang = state$.lang.get();

  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }

  try {
    await removeFromCartHandler({ cartId, lineIds: [lineId] }, lang);

    revalidateTag(TAGS.cart);
  } catch (e) {
    return "Error removing item";
  }
};

export const updateItemQuantity = async (_prevState: any,
  payload: {
    lineId: string;
    quantity: number;
    variantId: string;
  }): Promise<string | undefined> => {
  const lang = state$.lang.get();

  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return "Missing cartId";
  }

  const {
    lineId,
    variantId,
    quantity,
  } = payload

  try {
    if (quantity === 0) {
      await removeFromCartHandler({ cartId, lineIds: [lineId] }, lang);

      revalidateTag(TAGS.cart);

      return;
    }

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

    revalidateTag(TAGS.cart);
  } catch (e) {
    return "Error updating item quantity";
  }
};

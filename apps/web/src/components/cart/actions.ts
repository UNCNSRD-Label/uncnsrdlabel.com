"use server";

import {
  addToCartHandler,
  cartFragment,
  createCartHandler,
  getCartHandler,
  getFragmentData,
  removeFromCartHandler,
  updateCartHandler,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { TAGS } from '@uncnsrdlabel/lib';
import { parse } from 'bcp-47';
import { revalidateTag } from 'next/cache';
import { cookies } from "next/headers";

export async function addItem(
  _prevState: any,
  selectedVariantId: string,
) {
  if (!selectedVariantId) {
    return "Missing selectedVariantId";
  }

  const lang = cookies().get("lang")?.value ?? process.env.NEXT_PUBLIC_DEFAULT_LOCALE!;
 
  const parsedLang = parse(lang);

  const country = parsedLang.region;

  let cartId = cookies().get("cartId")?.value;
  let cartFragmentRef: FragmentType<typeof cartFragment> | null = null;

  if (cartId) {
    cartFragmentRef = await getCartHandler({ variables: { cartId }, lang });
  }

  if (!cartId || !cartFragmentRef) {
    try {
      cartFragmentRef = await createCartHandler({
        variables: {
          input: {
            // attributes: [
            //   {
            //     key: "",
            //     value: ""
            //   }
            // ],
            buyerIdentity: {
              // @ts-expect-error Type 'CountryCode' is not assignable to type 'InputMaybe<CountryCode> | undefined'.
              countryCode: country,
              // customerAccessToken: "",
              // deliveryAddressPreferences: [
              //   {
              //     customerAddressId: "",
              //     deliveryAddress: {
              //       address1: "",
              //       address2: "",
              //       city: "",
              //       company: "",
              //       country: "",
              //       firstName: "",
              //       lastName: "",
              //       phone: "",
              //       province: "",
              //       zip: ""
              //     }
              //   }
              // ],
              // email: "",
              // phone: "",
              // walletPreferences: [
              //   ""
              // ]
            },
            // discountCodes: [
            //   ""
            // ],
            // lines: [
            //   {
            //     attributes: [
            //       {
            //         key: "",
            //         value: ""
            //       }
            //     ],
            //     merchandiseId: "",
            //     quantity: 1,
            //     sellingPlanId: ""
            //   }
            // ],
            lines: [
              {
                merchandiseId: selectedVariantId,
                quantity: 1
              }
            ],
            // metafields: [
            //   {
            //     key: "",
            //     type: "",
            //     value: ""
            //   }
            // ],
            // note: ""
          }
        }
      });

      const cart = getFragmentData(cartFragment, cartFragmentRef);

      if (!cart) {
        return "Error creating cart";
      }

      cartId = cart.id;

      cookies().set("cartId", cartId);
    } catch (error) {
      return "Error creating cart";
    }
  } else {
    try {
      await addToCartHandler(
        {
          variables: {
            cartId,
            lines: [{ merchandiseId: selectedVariantId, quantity: 1 }],
          },
        }
      );

      revalidateTag(TAGS.cart);
    } catch (error) {
      return "Error adding item to cart";
    }
  }

};

export async function removeItem (
  _prevState: any,
  lineId: string,
) {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }

  try {
    await removeFromCartHandler({ variables: { cartId, lineIds: [lineId] } });

    revalidateTag(TAGS.cart);
  } catch (error) {
    return "Error removing item";
  }
};

export async function updateItemQuantity(_prevState: any,
  payload: {
    lineId: string;
    quantity: number;
    variantId: string;
  }) {
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
      await removeFromCartHandler({ variables: { cartId, lineIds: [lineId] } });

      revalidateTag(TAGS.cart);

      return;
    }

    await updateCartHandler(
      {
        variables: {
          cartId,
          lines: [
            {
              id: lineId,
              merchandiseId: variantId,
              quantity,
            },
          ],
        },
      }
    );

    revalidateTag(TAGS.cart);
  } catch (error) {
    return "Error updating item quantity";
  }
};

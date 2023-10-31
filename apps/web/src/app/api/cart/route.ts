"use server";

import { state$ } from "@/lib/store";
import {
  addToCartHandler,
  removeFromCartHandler,
  updateCartHandler,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { isShopifyError } from "@uncnsrdlabel/lib";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Cart } from "./types";

function formatErrorMessage(err: Error): string {
  return JSON.stringify(err, Object.getOwnPropertyNames(err));
}

export async function POST(req: NextRequest): Promise<Response> {
  const lang = state$.lang.get();

  const cartId = cookies().get("cartId")?.value;
  const { merchandiseId } = (await req.json()) as Cart;

  if (!cartId?.length || !merchandiseId?.length) {
    return NextResponse.json(
      { error: "Missing cartId or variantId" },
      { status: 400 },
    ) satisfies Response;
  }
  try {
    await addToCartHandler(
      { cartId, lines: [{ merchandiseId, quantity: 1 }] },
      lang,
    );
    return NextResponse.json({ status: 204 }) satisfies Response;
  } catch (e) {
    if (isShopifyError(e)) {
      return NextResponse.json(
        { message: formatErrorMessage(e.message) },
        { status: e.status },
      ) satisfies Response;
    }

    return NextResponse.json({ status: 500 }) satisfies Response;
  }
}

export async function PUT(req: NextRequest): Promise<Response> {
  const lang = state$.lang.get();

  const cartId = cookies().get("cartId")?.value;
  const { variantId, quantity, lineId } = (await req.json()) as Cart;

  if (!cartId || !variantId || !quantity || !lineId) {
    return NextResponse.json(
      { error: "Missing cartId, variantId, lineId, or quantity" },
      { status: 400 },
    );
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
    return NextResponse.json({ status: 204 });
  } catch (e) {
    if (isShopifyError(e)) {
      return NextResponse.json(
        { message: formatErrorMessage(e.message) },
        { status: e.status },
      );
    }

    return NextResponse.json({ status: 500 });
  }
}

export async function DELETE(req: NextRequest): Promise<Response> {
  const lang = state$.lang.get();

  const cartId = cookies().get("cartId")?.value;
  const { lineId } = (await req.json()) as Cart;

  if (!cartId || !lineId) {
    return NextResponse.json(
      { error: "Missing cartId or lineId" },
      { status: 400 },
    );
  }
  try {
    await removeFromCartHandler({ cartId, lineIds: [lineId] }, lang);
    return NextResponse.json({ status: 204 });
  } catch (error) {
    if (isShopifyError(error)) {
      return NextResponse.json(
        { message: formatErrorMessage(error.message) },
        { status: error.status },
      );
    }

    return NextResponse.json({ status: 500 });
  }
}

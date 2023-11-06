import { ResultOf } from "@graphql-typed-document-node/core";
import { MoneyV2 } from "@shopify/hydrogen/storefront-api-types";
import { imageFragment } from "@uncnsrdlabel/graphql-shopify-storefront";
import { ImageResponse } from "next/og";

export const alt = "UNCNSRD logo";

export type Props = {
  description?: string;
  image?: ResultOf<typeof imageFragment> | null;
  price?: MoneyV2;
  size?: {
    height: number;
    width: number;
  };
  title?: string;
};

export async function OpengraphImageResponse({
  description,
  image,
  price,
  size,
  title,
}: Props): Promise<ImageResponse> {
console.log({image})
  return new ImageResponse(
    (
      <div tw="bg-black flex relative h-full w-full">
        {image && <img tw="absolute inset-0 h-full w-full object-cover" alt={image.altText ?? title ?? description ?? "Product image"} height={size?.height} width={size?.width} src={image.url} />}
        <div tw="flex flex-col relative h-full w-full items-start justify-end p-8 text-white">
          {title && <h1 tw="mb-0">{title}</h1>}
          {description && <p tw="mb-0 text-sm">{description}</p>}
          {price && (
            <p tw="mb-0 text-lg">{`${new Intl.NumberFormat(undefined, {
              style: "currency",
              currency: price.currencyCode,
              currencyDisplay: "narrowSymbol",
            }).format(parseFloat(price.amount))}`}</p>
          )}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

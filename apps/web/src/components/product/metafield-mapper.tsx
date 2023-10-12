import { server } from "@/clients/shopify";
import { Tile } from "@/components/grid/tile";
import { transitionDelays } from "@/lib/tailwind";
import { ResultOf } from "@graphql-typed-document-node/core";
import {
  type Metaobject,
  type MetaobjectField,
} from "@shopify/hydrogen/storefront-api-types";
import {
  getFragmentData,
  productDetailsFragment,
  productMetafieldFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import Link from "next/link";
import { ReactNode } from "react";
import slugify from "slugify";
import { JsonValue } from "type-fest";

const getSingleLineTextFieldValue = (parsedValue: string) => {
  if (typeof parsedValue === "string") {
    return <span>{parsedValue}</span>;
  }
};

const getMultiLineTextFieldValue = (parsedValue: string) => {
  if (typeof parsedValue === "string") {
    return <p>{parsedValue}</p>;
  }
};

const getTextFieldValueList = (parsedValue: JsonValue) => {
  if (Array.isArray(parsedValue)) {
    return (
      <ul>
        {parsedValue.map((item) => {
          if (typeof item === "string") {
            return <li key={slugify(item)}>{item}</li>;
          }
        })}
      </ul>
    );
  }
};

export const MetafieldMapper = ({
  excludedKeys,
  includedKeys,
  metafield,
}: {
  excludedKeys?: string[];
  includedKeys?: string[];
  metafield: ResultOf<typeof productMetafieldFragment> | MetaobjectField;
}) => {
  let value: ReactNode = null;

  let parsedValue = null;

  if (!metafield.value) {
    return null;
  }

  try {
    parsedValue = JSON.parse(metafield.value) as JsonValue;
  } catch (error) {
    // console.error(error);
  }

  if (excludedKeys?.includes(metafield.key)) {
    return null;
  }

  if (includedKeys?.length && !includedKeys?.includes(metafield.key)) {
    return null;
  }

  switch (metafield.type) {
    case "list.single_line_text_field":
    case "list.multi_line_text_field": {
      value = getTextFieldValueList(parsedValue);
    }
    case "metaobject_reference":
      {
        const reference = metafield.reference as Metaobject;

        const name = reference?.fields?.find((field) => field.key === "name")
          ?.value;

        if (typeof name === "string") {
          value = <span>{name}</span>;
        }
      }

      break;
    case "list.metaobject_reference":
      {
        const references = metafield.references?.nodes as Metaobject[];

        if (Array.isArray(references)) {
          value = references.map((reference) => (
            <dl className="items-center grid grid-cols-[auto_1fr] justify-start gap-x-10 gap-y-4" key={reference.id}>
              {reference.fields.map((field) => {
                if (["name", "portfolio"].includes(field.key)) {
                  return null;
                }

                return (
                  <>
                    <dt className="mt-0 capitalize" key={slugify(`${field.key}-dt`)}>{field.key}</dt>
                    <dd className="mt-0 pl-0" key={slugify(`${field.key}-dd`)}>
                      {MetafieldMapper({
                        excludedKeys,
                        includedKeys,
                        metafield: field,
                      })}
                    </dd>
                  </>
                );
              })}
            </dl>
          ));
        }
      }
      break;
    case "list.product_reference":
      {
        if (Array.isArray(parsedValue)) {
          value = parsedValue.map(async (id, index) => {
            if (typeof id === "string") {
              // return <span key={index}>{id}</span>;

              const productDetailsFragmentRef = await server.getProductDetailsById({
                id,
              });

              const product = getFragmentData(
                productDetailsFragment,
                productDetailsFragmentRef,
              );

              return (
                <Link
                  className="block h-full w-full"
                  href={`/products/${product.handle}`}
                >
                  <Tile
                    className={transitionDelays[index]}
                    image={product.featuredImage}
                    labels={{
                      title: product.title ?? "Product",
                      amount: product.priceRange?.maxVariantPrice?.amount,
                      currencyCode:
                        product.priceRange?.maxVariantPrice?.currencyCode,
                    }}
                    // video={video}
                  />
                </Link>
              );
            }
          });
        }
      }
      break;
    case "dimension":
      {
        const dimension = parsedValue as { value: string; unit: string };

        value = (
          <>
            <span data-key="value">{dimension.value}</span>&nbsp;
            <span className="lowercase" data-key="unit">
              {dimension.unit}
            </span>
          </>
        );
      }
      break;
    case "number_integer":
      {
        value = getSingleLineTextFieldValue(metafield.value);
      }
      break;
    case "single_line_text_field":
      {
        value = getSingleLineTextFieldValue(metafield.value);
      }
      break;
    case "multi_line_text_field":
      {
        value = getMultiLineTextFieldValue(metafield.value);
      }
      break;
    case "page_reference":
      {
      }
      break;
  }

  return value;
};

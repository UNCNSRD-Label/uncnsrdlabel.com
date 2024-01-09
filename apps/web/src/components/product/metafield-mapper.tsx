import { Tile } from "@/components/grid/tile";
import { state$ } from "@/lib/store";
import { transitionDelays } from "@/lib/tailwind";
import { ResultOf } from "@graphql-typed-document-node/core";
import {
    type Metaobject,
    type MetaobjectField,
} from "@shopify/hydrogen/storefront-api-types";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
    getFragmentData,
    getProductDetailsByIdQuery,
    getShopifyGraphQL,
    productDetailsFragment,
    productMetafieldFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getLangProperties } from "@uncnsrdlabel/lib";
import { Fragment, ReactNode } from "react";
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
      <ul className="heart-list">
        {parsedValue.map((item) => {
          if (typeof item === "string") {
            return <li key={slugify(item)}>{item}</li>;
          }
        })}
      </ul>
    );
  }
};

export type MetafieldMapperProps = {
  excludedKeys?: string[];
  includedKeys?: string[];
  metafield: ResultOf<typeof productMetafieldFragment> | MetaobjectField;
};

export async function MetafieldMapper({
  excludedKeys,
  includedKeys,
  metafield,
}: MetafieldMapperProps) {
  const lang = state$.lang.get();

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
          value = <span key={`${metafield.key}.name`}>❤ {name}</span>;
        }
      }

      break;
    case "list.metaobject_reference":
      {
        const references = metafield.references?.nodes as Metaobject[];

        if (Array.isArray(references)) {
          value = references.map((reference) => (
            <dl
              className="grid grid-cols-[auto_1fr] items-center justify-start gap-x-10 gap-y-2"
              key={reference.id}
            >
              {reference.fields.map((field) => {
                if (["name", "portfolio"].includes(field.key)) {
                  return null;
                }

                return (
                  <Fragment key={field.key}>
                    <dt
                      className="mt-0 capitalize"
                      data-type={field.type}
                      key={`dt.${field.key}`}
                    >
                      {field.key}
                    </dt>
                    <dd className="mt-0 pl-0" key={`dd.${field.key}`}>
                      {MetafieldMapper({
                        excludedKeys,
                        includedKeys,
                        metafield: field,
                      })}
                    </dd>
                  </Fragment>
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
              const inContextVariables = getLangProperties(lang);

              const variables = { id };

              const { product: productDetailsFragmentRef } =
                await getShopifyGraphQL(
                  getProductDetailsByIdQuery,
                  // @ts-expect-error Types of property 'country' are incompatible.
                  { ...inContextVariables, ...variables },
                );

              if (!productDetailsFragmentRef) {
                return null;
              }

              const product = getFragmentData(
                productDetailsFragment,
                productDetailsFragmentRef,
              );

              if (!product) {
                return null;
              }

              return (
                <Link
                  className="block h-full w-full"
                  href={`/products/${product.handle}`}
                  key={product.id}
                >
                  <Tile
                    className={transitionDelays[index]}
                    image={product.featuredImage}
                    productDetailsFragmentRef={productDetailsFragmentRef}
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
            <span key={`${metafield.key}.value`}>{dimension.value}</span>&nbsp;
            <span className="lowercase" key={`${metafield.key}.unit`}>
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
}

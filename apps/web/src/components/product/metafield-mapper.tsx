import { ResultOf } from '@graphql-typed-document-node/core';
import { Metaobject } from "@shopify/hydrogen/storefront-api-types";
import { productMetafieldFragment } from "@uncnsrdlabel/graphql-shopify-storefront";
import { ReactNode } from "react";

export const MetafieldMapper = ({ metafield }: { metafield: ResultOf<typeof productMetafieldFragment> }) => {
  let value: ReactNode = null;

  switch (metafield.type) {
    case "list.single_line_text_field":
      {
        if (Array.isArray(metafield.value)) {
          value = (
            <ul>
              {(metafield.value as Record<string, string>[])?.map(
                (item, index) => <li key={item.id || index}>{item.value}</li>,
              )}
            </ul>
          );
        } else {
          value = JSON.parse(metafield.value) as string;
        }
      }
      break;
    case "metaobject_reference":
      {
        value = (metafield.reference as Metaobject)?.fields?.find(
          (field) => field.key === "name",
        )?.value;
      }
      break;
    case "list.metaobject_reference":
      {
        // value = metafield.references?.map(
        //   (reference: Metaobject) =>
        //     reference?.fields?.find((field) => field.key === "name")?.value
        // );
      }
      break;
    case "multi_line_text_field":
      {
        value = metafield.value;
      }
      break;
    case "page_reference":
      {
      }
      break;
  }

  return <span>{value}</span>;
};
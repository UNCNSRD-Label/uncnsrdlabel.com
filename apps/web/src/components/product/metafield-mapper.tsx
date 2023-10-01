import { ResultOf } from "@graphql-typed-document-node/core";
import {
  type Metaobject,
  type MetaobjectField,
} from "@shopify/hydrogen/storefront-api-types";
import { productMetafieldFragment } from "@uncnsrdlabel/graphql-shopify-storefront";
import { ReactNode } from "react";
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
        {parsedValue.map((item, index) => {
          if (typeof item === "string") {
            return <li key={index}>{item}</li>;
          }
        })}
      </ul>
    );
  }
};

export const MetafieldMapper = ({
  metafield,
}: {
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

  switch (metafield.type) {
    case "list.single_line_text_field":
    case "list.multi_line_text_field": {
      // const parsedValue = JSON.parse(metafield.value) as JsonValue;

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
          return references.map((reference, index) => (
            <dl className="gap-2 grid grid-cols-2 justify-start" key={index}>
              {reference.fields.map((field) => {
                if (["name", "portfolio"].includes(field.key)) {
                  return null;
                }

                console.log({ field });

                return <>
                  <dt className="capitalize mt-0">{field.key}</dt>
                  <dd className="pl-0">
                    {MetafieldMapper({ metafield: field })}
                  </dd>
                </>;
              })}
            </dl>
          ));
        }
      }
      break;
    case "dimension":
      {
        const dimension = parsedValue as { value: string; unit: string };

        value = <>
          <span data-key="value">{dimension.value}</span>&nbsp;
          <span className="lowercase" data-key="unit">{dimension.unit}</span>
        </>;
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

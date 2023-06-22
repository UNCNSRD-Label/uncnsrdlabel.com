import { flattenConnection } from "./flatten-connection";
function parseMetafield(metafield) {
  if (!metafield.type) {
    const noTypeError = `parseMetafield(): The 'type' field is required in order to parse the Metafield.`;
    {
      console.error(`${noTypeError} Returning 'parsedValue' of 'null'`);
      return {
        ...metafield,
        parsedValue: null,
      };
    }
  }
  switch (metafield.type) {
    case "boolean":
      return {
        ...metafield,
        parsedValue: metafield.value === "true",
      };
    case "collection_reference":
    case "file_reference":
    case "page_reference":
    case "product_reference":
    case "variant_reference":
      return {
        ...metafield,
        parsedValue: metafield.reference,
      };
    case "color":
    case "multi_line_text_field":
    case "single_line_text_field":
    case "url":
      return {
        ...metafield,
        parsedValue: metafield.value,
      };
    case "dimension":
    case "money":
    case "json":
    case "rating":
    case "volume":
    case "weight":
    case "list.color":
    case "list.dimension":
    case "list.number_integer":
    case "list.number_decimal":
    case "list.rating":
    case "list.single_line_text_field":
    case "list.url":
    case "list.volume":
    case "list.weight": {
      let parsedValue = null;
      try {
        parsedValue = parseJSON(metafield.value ?? "");
      } catch (err) {
        const parseError = `parseMetafield(): attempted to JSON.parse the 'metafield.value' property, but failed.`;
        {
          console.error(`${parseError} Returning 'null' for 'parsedValue'`);
        }
        parsedValue = null;
      }
      return {
        ...metafield,
        parsedValue,
      };
    }
    case "date":
    case "date_time":
      return {
        ...metafield,
        parsedValue: new Date(metafield.value ?? ""),
      };
    case "list.date":
    case "list.date_time": {
      const jsonParseValue = parseJSON(
        (metafield == null ? void 0 : metafield.value) ?? ""
      );
      return {
        ...metafield,
        parsedValue: jsonParseValue.map((dateString) => new Date(dateString)),
      };
    }
    case "number_decimal":
    case "number_integer":
      return {
        ...metafield,
        parsedValue: Number(metafield.value),
      };
    case "list.collection_reference":
    case "list.file_reference":
    case "list.page_reference":
    case "list.product_reference":
    case "list.variant_reference":
      return {
        ...metafield,
        parsedValue: flattenConnection(metafield.references ?? void 0),
      };
    default: {
      const typeNotFoundError = `parseMetafield(): the 'metafield.type' you passed in is not supported. Your type: "${metafield.type}". If you believe this is an error, please open an issue on GitHub.`;
      {
        console.error(
          `${typeNotFoundError}  Returning 'parsedValue' of 'null'`
        );
        return {
          ...metafield,
          parsedValue: null,
        };
      }
    }
  }
}
function parseJSON(json) {
  if (String(json).includes("__proto__")) {
    return JSON.parse(json, (k, v) => {
      if (k !== "__proto__") return v;
    });
  }
  return JSON.parse(json);
}
export { parseJSON, parseMetafield };
//# sourceMappingURL=parse-metafield.mjs.map

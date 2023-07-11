import { Metafield, Metaobject } from "@/lib/shopify/types";

export const MetafieldMapper = ({ metafield }: { metafield: Metafield }) => {
  let value;

  switch (metafield.type) {
    case "list.single_line_text_field":
      {
        if (Array.isArray(metafield.value)) {
          value = (
            <ul>
              {metafield.value?.map((item, index) => (
                <li key={item.id || index}>{item}</li>
              ))}
            </ul>
          );
        } else {
          value =
            JSON.parse(metafield.value)?.[0] ?? JSON.parse(metafield.value);
        }
      }
      break;
    case "metaobject_reference":
      {
        value = (metafield.reference as Metaobject)?.fields?.find(
          (field) => field.key === "name"
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

export default MetafieldMapper;

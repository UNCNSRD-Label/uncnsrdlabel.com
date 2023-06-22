import { clsx } from "clsx";

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "components/accordion";

import { Metafield } from "lib/shopify/types";

export function MetaFields({ metafields }: { metafields: Metafield[] }) {
  //   const parsedMetafield = metafields
  // .filter(Boolean)
  // ?.filter(
  //   (metafield) =>
  //     ![
  //       "composition",
  //       "complementary_products",
  //       "material_image",
  //       "related_products",
  //     ].includes(metafield?.key!)
  // )
  // ?.sort((a, b) => a!.key!.localeCompare(b!.key!))
  // .map((metafield) => parseMetafield<ParsedMetafields[metafield.type]>(metafield));

  console.log(metafields);
  //   console.log(metafields.map((metafield) => metafield?.key));

  return (
    <Accordion className="mt-8" type="single" collapsible>
      {metafields.filter(Boolean).map((metafield, index) => (
        <AccordionItem key={index} value={metafield.key}>
          <AccordionTrigger>
            <AccordionHeader>
              {metafield?.key
                ?.split("_")
                .map(
                  (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
                )
                .join(" ")}
            </AccordionHeader>
          </AccordionTrigger>
          <AccordionContent
            className={clsx("collapsible-content", "prose", "prose-xs")}
          >
            <code>
              <pre>{JSON.stringify(metafield, null, 2)}</pre>
            </code>
            {/* {metafield?.type === "page_reference" ? (
              <>
                <div
                  dangerouslySetInnerHTML={{
                    __html: metafield?.reference?.body,
                  }}
                />
              </>
            ) : (
              metafield?.value
            )} */}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

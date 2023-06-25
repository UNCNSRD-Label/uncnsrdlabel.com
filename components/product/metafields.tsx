import { clsx } from "clsx";
import { forwardRef } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "components/accordion";

import { Metafield } from "lib/shopify/types";

export type MetaFieldsRef = HTMLDivElement;

interface MetaFieldsProps {
  className?: string;
  id?: string;
  metafields: Metafield[];
}

export const MetaFields = forwardRef<MetaFieldsRef, MetaFieldsProps>(
  ({ className, id, metafields, ...props }, forwardedRef) => {
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

    return (
      <Accordion
        className={clsx("mt-8 max-w-[100dvw]", className)}
        type="single"
        collapsible
        id={id}
        ref={forwardedRef}
        {...props}
      >
        {metafields.filter(Boolean).map((metafield, index) => (
          <AccordionItem key={index} value={metafield.key}>
            <AccordionTrigger>
              <AccordionHeader>
                {metafield?.key
                  ?.split("_")
                  .map(
                    (word: string) =>
                      word.charAt(0).toUpperCase() + word.slice(1)
                  )
                  .join(" ")}
              </AccordionHeader>
            </AccordionTrigger>
            <AccordionContent className="collapsible-content prose-xs prose overflow-x-auto">
              <pre className="collapsible-content prose-xs w-max-[calc(100%_-_4rem)] prose overflow-x-auto">
                <code>{JSON.stringify(metafield, null, 2)}</code>
              </pre>

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
);

MetaFields.displayName = "MetaFields";

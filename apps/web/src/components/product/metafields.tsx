import { clsx } from "clsx";
import { forwardRef } from "react";

import { MetafieldMapper } from "@/components/product/metafield-mapper";

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";

import { Metafield } from "@uncnsrdlabel/graphql-shopify-storefront/types";

export type MetaFieldsRef = HTMLDivElement;

interface MetaFieldsProps {
  className?: string;
  id?: string;
  metafields: Metafield[];
}

export const MetaFields = forwardRef<MetaFieldsRef, MetaFieldsProps>(
  ({ className, id, metafields, ...props }, forwardedRef) => {
    const defaultValue = metafields
      .map((metafield) => metafield.key ?? "")
      .filter(
        (key) =>
          ![
            "component",
            "returns",
            "shipping",
            "model",
            "complementary_products",
            "related_products",
          ].includes(key),
      );

    return (
      <Accordion
        className={clsx("mt-8 max-w-[100dvw]", className)}
        defaultValue={defaultValue}
        id={id}
        ref={forwardedRef}
        type="multiple"
        {...props}
      >
        {metafields.filter(Boolean).map((metafield, index) => (
          <AccordionItem
            key={index}
            value={metafield.key}
            className="border-gray-200"
          >
            <AccordionTrigger className="stroke-gray-200">
              <AccordionHeader className="text-sm">
                {metafield?.key
                  ?.split("_")
                  .map(
                    (word: string) =>
                      word.charAt(0).toUpperCase() + word.slice(1),
                  )
                  .join(" ")}
              </AccordionHeader>
            </AccordionTrigger>
            <AccordionContent className="collapsible-content prose prose-sm overflow-x-auto dark:prose-invert">
              <MetafieldMapper metafield={metafield} />
              {/* <pre className="w-max-[calc(100%_-_4rem)]">
                <code>{JSON.stringify(metafield, null, 2)}</code>
              </pre> */}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  },
);

MetaFields.displayName = "MetaFields";

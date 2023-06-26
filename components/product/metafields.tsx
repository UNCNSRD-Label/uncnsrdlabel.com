import { clsx } from "clsx";
import { forwardRef } from "react";

import { MetafieldMapper } from "components/product/metafield-mapper";

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
              <MetafieldMapper metafield={metafield} />
              {/* <pre className="collapsible-content prose-xs w-max-[calc(100%_-_4rem)] prose overflow-x-auto">
                <code>{JSON.stringify(metafield, null, 2)}</code>
              </pre> */}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
);

MetaFields.displayName = "MetaFields";

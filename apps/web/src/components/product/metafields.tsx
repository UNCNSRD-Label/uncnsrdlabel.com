import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { MetafieldMapper } from "@/components/product/metafield-mapper";
import { ResultOf } from "@graphql-typed-document-node/core";
import { productMetafieldFragment } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { forwardRef } from "react";

export type MetaFieldsRef = HTMLDivElement;

interface MetaFieldsProps {
  className?: string;
  excludedKeys?: string[];
  includedKeys?: string[];
  id?: string;
  metafieldFragments: readonly ResultOf<typeof productMetafieldFragment>[];
}

export const MetaFields = forwardRef<MetaFieldsRef, MetaFieldsProps>(
  (
    { className, excludedKeys, includedKeys, id, metafieldFragments, ...props },
    forwardedRef,
  ) => {
    const defaultValue = metafieldFragments
      .map((metafield) => metafield.key ?? "");

    return (
      <Accordion
        className={cn("mt-8 max-w-[100dvw]", className)}
        defaultValue={defaultValue}
        id={id}
        ref={forwardedRef}
        type="multiple"
        {...props}
      >
        {metafieldFragments
          .filter(Boolean)
          .filter((metafield) => !excludedKeys?.includes(metafield.key))
          .filter(
            (metafield) => {
              if(!includedKeys?.length || includedKeys?.includes(metafield.key)) {
                return true;
              }
            },
          )
          .map((metafield, index) => (
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
              <AccordionContent className="collapsible-content prose prose-sm dark:prose-invert overflow-x-auto">
                <MetafieldMapper
                  metafield={metafield}
                  excludedKeys={excludedKeys}
                  includedKeys={includedKeys}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    );
  },
);

MetaFields.displayName = "MetaFields";

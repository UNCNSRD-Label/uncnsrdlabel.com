import { MetafieldMapper } from "@/components/product/metafield-mapper";
import { ResultOf } from "@graphql-typed-document-node/core";
import { productMetafieldFragment } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";

interface MetaFieldsProps {
  className?: string;
  excludedKeys?: string[];
  includedKeys?: string[];
  id?: string;
  lang: Intl.BCP47LanguageTag;
  metafieldFragments: readonly ResultOf<typeof productMetafieldFragment>[];
}

export function MetaFields({
  className,
  excludedKeys,
  includedKeys,
  lang,
  metafieldFragments,
  ...props
}: MetaFieldsProps) {
  return (
    <dl className={cn("max-w-[100dvw]", className)} {...props}>
      {metafieldFragments
        .filter(Boolean)
        .filter((metafield) => !excludedKeys?.includes(metafield.key))
        .filter((metafield) => {
          if (!includedKeys?.length || includedKeys?.includes(metafield.key)) {
            return true;
          }
        })
        .map((metafield) => (
          <>
            <dt
              className="mb-2 text-sm uppercase"
              data-type={metafield.type}
              key={`dt.${metafield?.key}`}
            >
              {metafield?.key
                ?.split("_")
                .join(" ")}
            </dt>

            <dd
              className={cn(
                "collapsible-content prose prose-sm prose-invert overflow-x-auto [&+dt]:mt-4 [&+dt]:border-t [&+dt]:border-gray-800 [&+dt]:pt-4",
              )}
              data-type={metafield.type.replace(".", "|")}
              key={`dd.${metafield?.key}`}
            >
              <MetafieldMapper
                excludedKeys={excludedKeys}
                includedKeys={includedKeys}
                lang={lang}
                metafield={metafield}
              />
            </dd>
          </>
        ))}
    </dl>
  );
}

MetaFields.displayName = "MetaFields";

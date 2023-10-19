import { MetafieldMapper } from "@/components/product/metafield-mapper";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import {
  FragmentType,
  getFragmentData,
  productDetailsFragment,
  productMetafieldFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";

export function ProductDetailsTabs({
  className,
  excludedKeys,
  includedKeys,
  productDetailsFragmentRef,
}: {
  className?: string;
  excludedKeys?: string[];
  includedKeys?: string[];
  id?: string;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  const metafieldsFragmentRefs = product.metafields;

  const metafieldFragments = getFragmentData(
    productMetafieldFragment,
    metafieldsFragmentRefs.filter(Boolean),
  );

  const metafieldFragmentsFiltered = metafieldFragments
    .filter(Boolean)
    .filter((metafield) => !excludedKeys?.includes(metafield.key))
    .filter((metafield) => {
      if (!includedKeys?.length || includedKeys?.includes(metafield.key)) {
        return true;
      }
    });

  const defaultValue = metafieldFragmentsFiltered[0]?.key;

  return (
    <TabsPrimitive.Root className={cn("w-full", className)} defaultValue={defaultValue}>
      <TabsPrimitive.List className="flex gap-4 mb-4 overflow-x-auto w-80 scroll-pb-12 text-xs ghost-scrollbar">
        {metafieldFragmentsFiltered.map((metafield) => (
          <TabsPrimitive.Trigger className="data-[state=active]:text-hotPink" value={metafield.key}>
            {metafield?.key
              ?.split("_")
              .map(
                (word: string) => word.charAt(0).toUpperCase() + word.slice(1),
              )
              .join(" ")}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {metafieldFragmentsFiltered.map((metafield) => (
        <TabsPrimitive.Content className="text-xs" key={metafield.key} value={metafield.key}>
          <MetafieldMapper
            metafield={metafield}
            excludedKeys={excludedKeys}
            includedKeys={includedKeys}
          />
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}

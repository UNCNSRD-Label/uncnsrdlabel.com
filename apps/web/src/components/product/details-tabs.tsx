import { MetafieldMapper } from "@/components/product/metafield-mapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@uncnsrdlabel/components/ui/tabs";
import {
  getFragmentData,
  productDetailsFragment,
  productMetafieldFragment,
  type FragmentType,
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
    <Tabs
      className={cn("w-full", className)}
      defaultValue={defaultValue}
    >
      <TabsList className="">
        {metafieldFragmentsFiltered.map((metafield) => (
          <TabsTrigger
            className="data-[state=active]:text-hotPink"
            key={`Trigger.${metafield.key}`}
            value={metafield.key}
          >
            {metafield?.key
              ?.split("_")
              .map(
                (word: string) => word.charAt(0).toLocaleUpperCase() + word.slice(1),
              )
              .join(" ")}
          </TabsTrigger>
        ))}
      </TabsList>
      {metafieldFragmentsFiltered.map((metafield) => (
        <TabsContent
          className="text-xs"
          key={`Content.${metafield.key}`}
          value={metafield.key}
        >
          <MetafieldMapper
            metafield={metafield}
            excludedKeys={excludedKeys}
            includedKeys={includedKeys}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}

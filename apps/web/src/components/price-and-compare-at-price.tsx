import { Price } from "@/components/price";
import {
  FragmentType,
  getFragmentData,
  productBasicFragment,
  productDetailsFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";

export const PriceAndCompareAtPrice = ({
  className,
  currencyCodeClassName,
  productBasicFragmentRef,
  productDetailsFragmentRef,
}: {
  className?: string;
  currencyCodeClassName?: string;
  productBasicFragmentRef?: FragmentType<typeof productBasicFragment>;
  productDetailsFragmentRef?: FragmentType<typeof productDetailsFragment>;
} & React.ComponentProps<"div">) => {
  let product;

  if (productBasicFragmentRef) {
    product = getFragmentData(productBasicFragment, productBasicFragmentRef);
  }

  if (productDetailsFragmentRef) {
    product = getFragmentData(
      productDetailsFragment,
      productDetailsFragmentRef,
    );
  }

  if (!product) {
    console.error("No product data found");
    return null
  };

  return (
    <div
      className={cn("grid justify-start gap-x-4 gap-y-2", className)}
    >
      <Price
        className={cn("font-semibold", {
          "text-red-600": product.compareAtPriceRange?.minVariantPrice.amount > product.priceRange?.minVariantPrice.amount,
        })}
        amount={product.priceRange.minVariantPrice.amount}
        currencyCode={product.priceRange.minVariantPrice.currencyCode}
        currencyCodeClassName={currencyCodeClassName}
      />

      {(product.compareAtPriceRange?.minVariantPrice.amount > product.priceRange?.minVariantPrice.amount) && (
        <Price
          className="line-through decoration-red-600"
          amount={product.compareAtPriceRange.minVariantPrice.amount}
          currencyCode={
            product.compareAtPriceRange.minVariantPrice.currencyCode
          }
          currencyCodeClassName={currencyCodeClassName}
        />
      )}
    </div>
  );
};

import { Price } from "@/components/price";
import {
  getFragmentData,
  productBasicFragment,
  productDetailsFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";

export const PriceAndCompareAtPrice = ({
  className,
  currencyCodeClassName,
  productBasicFragmentRef,
  productDetailsFragmentRef,
  lang,
}: {
  className?: string;
  currencyCodeClassName?: string;
  productBasicFragmentRef?: FragmentType<typeof productBasicFragment>;
  productDetailsFragmentRef?: FragmentType<typeof productDetailsFragment>;
  lang: Intl.BCP47LanguageTag;
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
        amount={product.priceRange.minVariantPrice.amount}
        className={cn("font-semibold", {
          "text-red-600": product.compareAtPriceRange?.minVariantPrice.amount > product.priceRange?.minVariantPrice.amount,
        })}
        currencyCode={product.priceRange.minVariantPrice.currencyCode}
        currencyCodeClassName={currencyCodeClassName}
        lang={lang}
      />

      {(product.compareAtPriceRange?.minVariantPrice.amount > product.priceRange?.minVariantPrice.amount) && (
        <Price
          amount={product.compareAtPriceRange.minVariantPrice.amount}
          className="line-through decoration-red-600"
          currencyCode={
            product.compareAtPriceRange.minVariantPrice.currencyCode
          }
          currencyCodeClassName={currencyCodeClassName}
          lang={lang}
        />
      )}
    </div>
  );
};

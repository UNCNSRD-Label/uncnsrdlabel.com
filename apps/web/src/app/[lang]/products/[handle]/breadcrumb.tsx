import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb as BreadcrumbRoot,
} from "@uncnsrdlabel/components/ui/breadcrumb";
import {
  FragmentType,
  getFragmentData,
  productDetailsFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import Link from "next/link";

export function Breadcrumb({
  className,
  productDetailsFragmentRef,
}: {
  className?: string;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  return (
    <BreadcrumbRoot className={className}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} className="flex items-center gap-2" href="/">
          <span className="font-bold">{process.env.NEXT_PUBLIC_SITE_NAME}</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/search">
          Shop
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink as={Link} href={`/products/${product.handle}`}>
          {product.title}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbRoot>
  );
}

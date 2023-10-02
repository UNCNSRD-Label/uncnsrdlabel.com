import { server } from "@/clients/shopify";
import { ProductCard } from "@/components/product-card/card";

export async function AddPremiumPackaging({ className }: { className?: string }) {
  const handle = "premium-packaging";

  const productDetailsFragmentRef = await server.getProductDetailsByHandle({ handle });

  if (!productDetailsFragmentRef) {
    return null;
  }

  return (
    <ProductCard className={className} productDetailsFragmentRef={productDetailsFragmentRef} />
  );
}

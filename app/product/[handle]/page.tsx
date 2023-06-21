import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Product, WithContext } from "schema-dts";

import Grid from "components/grid";
import Navbar from "components/layout/navbar";
import NavbarContent from "components/layout/navbar/content";
import ProductGridItems from "components/layout/product-grid-items";
import Price from "components/price";
import { AddToCart } from "components/product/add-to-cart";
import { Images } from "components/product/images";
import { VariantSelector } from "components/product/variant-selector";
import Prose from "components/prose";
import { HIDDEN_PRODUCT_TAG } from "lib/constants";
import { getProduct, getProductRecommendations } from "lib/shopify";
import { Image } from "lib/shopify/types";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const hide = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: hide,
      follow: hide,
      googleBot: {
        index: hide,
        follow: hide,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { handle: string };
}) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const jsonLd: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: {
      "@type": "ImageObject",
      about: product.featuredImage?.altText,
      height: product.featuredImage?.height.toString(),
      url: product.featuredImage?.url,
      width: product.featuredImage?.width.toString(),
    },
    description: product.description,
  };

  return (
    <>
      <Navbar blend>
        <NavbarContent showLogo />
      </Navbar>
      <div>
        <div className="lg:grid lg:grid-cols-6">
          <div className="grid max-h-[100dvh] overflow-y-auto lg:col-span-4">
            <Images
              images={product.images.map((image: Image) => ({
                src: image.url,
                altText: image.altText,
              }))}
              sizes="(max-width: 639px) 100vw, 66vw"
            />
          </div>

          <div className="p-6 lg:col-span-2">
            <div className="mb-16 mt-24 text-black dark:text-white">
              <h3
                data-testid="product-name"
                className="box-decoration-clone text-lg uppercase"
              >
                {product.title}
              </h3>
              <Price
                className="text-sm font-semibold dark:bg-black dark:text-white"
                amount={product.priceRange.maxVariantPrice.amount}
                currencyCode={product.priceRange.maxVariantPrice.currencyCode}
              />
            </div>

            <VariantSelector
              options={product.options}
              variants={product.variants}
            />

            {product.descriptionHtml ? (
              <Prose
                className="mb-6 text-sm leading-tight"
                html={product.descriptionHtml}
              />
            ) : null}

            <AddToCart
              variants={product.variants}
              availableForSale={product.availableForSale}
            />
          </div>
        </div>
        <Suspense>
          <RelatedProducts id={product.id} />
        </Suspense>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="px-4 py-8">
      <div className="mb-4 text-3xl font-bold">Related Products</div>
      <Grid className="grid-cols-2 lg:grid-cols-5">
        <ProductGridItems products={relatedProducts} />
      </Grid>
    </div>
  );
}

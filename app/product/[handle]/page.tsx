import type { Metadata } from 'next';
import NextImage from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { Product, WithContext } from 'schema-dts';

import Grid from 'components/grid';
import Footer from 'components/layout/footer';
import ProductGridItems from 'components/layout/product-grid-items';
import { AddToCart } from 'components/product/add-to-cart';
// import { Details } from 'components/product/details';
import { Gallery } from 'components/product/gallery';
import { VariantSelector } from 'components/product/variant-selector';
import Prose from 'components/prose';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';

export const runtime = 'edge';

export async function generateMetadata({
  params
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
        follow: hide
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const jsonLd: WithContext<Product> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: {
      '@type': 'ImageObject',
      about: product.featuredImage?.altText,
      height: product.featuredImage?.height.toString(),
      url: product.featuredImage?.url,
      width: product.featuredImage?.width.toString()
    },
    description: product.description
  };

  return (
    <>
      <article>
        {/* <Details product={product} /> */}
        {product.featuredImage ? (
          <figure className="relative h-[100dvh] w-full">
            <NextImage
              alt={product.title}
              className="h-full object-cover"
              fill
              sizes="33vw"
              src={product.featuredImage.url}
            />
          </figure>
        ) : null}
        <section className="pin">
          <div className="pin-wrap-sticky">
            <div className="pin-wrap">
              <figure className="relative h-full w-full">
                <NextImage
                  src="https://scroll-driven-animations.style/demos/horizontal-section/shared/pexels-photo-3618545.jpeg"
                  alt=""
                  fill
                  className="h-full object-cover"
                />
              </figure>
              <figure className="relative h-full w-full">
                <NextImage
                  src="https://scroll-driven-animations.style/demos/horizontal-section/shared/pexels-photo-5207262.jpeg"
                  alt=""
                  fill
                  className="h-full object-cover"
                />
              </figure>
              <figure className="relative h-full w-full">
                <NextImage
                  src="https://scroll-driven-animations.style/demos/horizontal-section/shared/pexels-photo-3371358.jpeg"
                  alt=""
                  fill
                  className="h-full object-cover"
                />
              </figure>
              <figure className="relative h-full w-full">
                <NextImage
                  src="https://scroll-driven-animations.style/demos/horizontal-section/shared/pexels-photo-3618545.jpeg"
                  alt=""
                  fill
                  className="h-full object-cover"
                />
              </figure>
            </div>
          </div>
        </section>
        <section className="lg:grid lg:grid-cols-6">
          <div className="lg:col-span-4">
            <Gallery
              title={product.title}
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
              images={product.images.map((image: Image) => ({
                src: image.url,
                altText: image.altText
              }))}
            />
          </div>

          <div className="bg-white dark:bg-black lg:col-span-2">
            <div className="fixed top-0 grid h-full items-center p-6">
              <div className=" max-h-[calc(100dhv-theme(spacing.12))] bg-white p-6 dark:bg-black">
                {/* @ts-expect-error Server Component */}
                <VariantSelector options={product.options} variants={product.variants} />

                {product.descriptionHtml ? (
                  <Prose className="mb-6 text-sm leading-tight" html={product.descriptionHtml} />
                ) : null}

                <AddToCart
                  variants={product.variants}
                  availableForSale={product.availableForSale}
                />
              </div>
            </div>
          </div>
        </section>
      </article>
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <RelatedProducts id={product.id} />
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <Footer />
        </Suspense>
      </Suspense>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <aside className="px-4 py-8">
      <div className="mb-4 text-3xl font-bold">Related Products</div>
      <Grid className="grid-cols-2 lg:grid-cols-5">
        <ProductGridItems products={relatedProducts} />
      </Grid>
    </aside>
  );
}

import type { Metadata } from 'next';
import NextImage from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { Product, WithContext } from 'schema-dts';

import Grid from 'components/grid';
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

  const images = product.images;

  return (
    <>
      <article className="relative">
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
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <section className="pin">
          <div className="pin-wrap-sticky">
            <div
              className="pin-wrap grid w-[calc(600dvw_+_theme(gap[0.5]))] gap-0.5 py-24 sm:w-[calc(300dvw_+_theme(gap[0.5]))] xl:w-[calc(200dvw_+_theme(gap[0.5]))]"
              style={{
                gridTemplateColumns: `repeat(${images.length + 1}, 1fr)`
              }}
            >
              <div className="opacity-0">Space deliberately left blank</div>
              {[...product.images].map((image) => (
                <figure className="item relative aspect-3/4 w-full snap-start" key={image.id}>
                  <NextImage
                    alt={image.altText}
                    className="h-full object-cover"
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    src={image.url}
                  />
                </figure>
              ))}
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

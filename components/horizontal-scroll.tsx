import clsx from 'clsx';
import { getCollectionProducts, getPage } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function HorizontalScroll({ className }: { className?: string }) {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });

  if (!products?.length) return null;

  const page = await getPage('home');
  console.log({page})
  if (!page) return notFound();

  const images = page.media?.references.edges.map({node} => node)

  return (
    <div
      className={clsx(
        className,
        'pin relative w-full max-w-[100dvw] snap-x overflow-x-hidden bg-black'
      )}
    >
      <div className="pin-wrap-sticky">
        <div
          className="pin-wrap"
          // style={{
          //   gridTemplateColumns: `repeat(${products.length}, 1fr)`
          // }}
        >
          {[...products].map((product, i) => (
            <Link
              key={`${product.handle}${i}`}
              href={`/product/${product.handle}`}
              className="relative snap-center"
            >
              {product.featuredImage ? (
                <Image
                  alt={product.title}
                  className="h-full object-cover"
                  fill
                  sizes="33vw"
                  src={product.featuredImage.url}
                />
              ) : null}
              <div className="absolute inset-y-0 right-0 items-end justify-center hidden">
                <div className="inline-flex bg-white p-4 text-xl font-semibold text-black dark:bg-black dark:text-white uppercase">
                  {product.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

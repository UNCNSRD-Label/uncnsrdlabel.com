import clsx from 'clsx';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export async function HorizontalScroll({ className }: { className: string }) {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });

  if (!products?.length) return null;

  return (
    <div
      className={clsx(
        className,
        'pin relative min-h-[100dvh] w-full max-w-[100dvw] snap-x overflow-x-hidden bg-black'
      )}
    >
      <div className="pin-wrap-sticky">
        <div
          className="pin-wrap"
          style={{
            gridTemplateColumns: `repeat(${products.length + 1}, 1fr)`,
            width: `${(products.length + 1) * 60}dvw`
          }}
        >
          <h2 className="snap-center text-4xl text-white">
            UNCNSRD is multifunctional swimwear for female figures who aren’t afraid to show off
            their assets and want to feel unapologetically sexy.
          </h2>
          {[...products].map((product, i) => (
            <Link
              key={`${product.handle}${i}`}
              href={`/product/${product.handle}`}
              className="relative snap-center"
            >
              {product.featuredImage ? (
                <Image
                  alt={product.title}
                  className="h-full object-contain"
                  fill
                  sizes="33vw"
                  src={product.featuredImage.url}
                />
              ) : null}
              <div className="absolute inset-y-0 right-0 flex items-center justify-center">
                <div className="inline-flex bg-white p-4 text-xl font-semibold text-black dark:bg-black dark:text-white">
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

import clsx from 'clsx';
import { getPage } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function HorizontalScroll({ className }: { className?: string }) {
  const page = await getPage('home');

  if (!page) return notFound();

  const images = page.images;

  return (
    <section
      className={clsx(
        className,
        'pin relative grid w-full max-w-[100dvw] justify-items-center py-0.5'
      )}
    >
      <div className="pin-wrap-sticky w-full snap-x overflow-x-auto">
        <div
          className="pin-wrap grid w-[600dvw] gap-0.5 sm:w-[300dvw] lg:w-[200dvw]"
          style={{
            gridTemplateColumns: `repeat(${images.length}, 1fr)`
          }}
        >
          {[...images].map((image) => (
            <figure className="item relative aspect-3/4 w-full snap-start" key={image.id}>
              <Image
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
      <Link
        href="/search"
        aria-label="Go to the shop"
        className="absolute inset-x-auto bottom-8 border px-12 py-4 uppercase text-white"
      >
        Shop
      </Link>
    </section>
  );
}

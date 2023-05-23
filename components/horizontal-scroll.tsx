import clsx from 'clsx';
import { getPage } from 'lib/shopify';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function HorizontalScroll({ className }: { className?: string }) {
  const page = await getPage('home');

  if (!page) return notFound();

  const images = page.images;

  return (
    <div
      className={clsx(
        className,
        'pin relative w-full max-w-[100dvw] snap-x overflow-x-auto py-0.5'
      )}
    >
      <div className="pin-wrap-sticky">
        <div
          className="pin-wrap grid gap-0.5 sm:w-[300dvw] lg:w-[200dvw]"
          style={{
            gridTemplateColumns: `repeat(${images.length}, 1fr)`
          }}
        >
          {[...images].map((image) => (
            <div className="item relative aspect-3/4 w-full snap-start" key={image.id}>
              <Image
                alt={image.altText}
                className="h-full object-cover"
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                src={image.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

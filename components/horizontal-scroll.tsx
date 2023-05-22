import clsx from 'clsx';
import { getPage } from 'lib/shopify';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function HorizontalScroll({ className }: { className?: string }) {
  const page = await getPage('home');

  if (!page) return notFound();

  const images = page.images;

  return (
    <div className={clsx(className, 'pin relative w-full max-w-[100dvw] snap-x overflow-x-hidden')}>
      <div className="pin-wrap-sticky">
        <div className="pin-wrap">
          {[...images].map((image) => (
            <div className="item relative aspect-3/4 snap-center" key={image.id}>
              <Image
                alt={image.altText}
                className="h-full object-cover"
                fill
                sizes="33vw"
                src={image.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

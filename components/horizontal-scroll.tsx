import clsx from "clsx";
import { getPage } from "lib/shopify";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function HorizontalScroll({ className }: { className?: string }) {
  const page = await getPage("home");

  if (!page) return notFound();

  const images = page.images;

  return (
    <div
      className={clsx(
        className,
        "pin relative hidden w-full max-w-[100dvw] justify-items-center py-0.5 sm:grid"
      )}
    >
      <div className="pin-wrap-sticky w-full snap-x">
        <div
          className="pin-wrap grid w-[calc((((100dvh_/_4)_*_3)_+_theme(gap[0.5]))_*_6)] gap-0.5"
          style={{
            gridTemplateColumns: `repeat(${images.length}, 1fr)`,
          }}
        >
          {[...images].map((image) => (
            <figure className="item relative aspect-3/4 w-full" key={image.id}>
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
    </div>
  );
}

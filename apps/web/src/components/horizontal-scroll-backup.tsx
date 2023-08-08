import { Image } from "@/components/image";
import { ScrollControls } from "@/components/scroll-controls";
import { getPage } from "@uncnsrdlabel/graphql-shopify-storefront/utilities";
import { clsx } from "clsx";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function HorizontalScrollBackup({ className }: { className?: string }) {
  const page = await getPage("home");

  if (!page) return notFound();

  const images = page.images;

  const imagesList = [...images].map((image, index) => (
    <figure
      className="item relative grid aspect-3/4 w-full snap-start justify-items-center p-6 "
      key={image.id || index}
    >
      <Image
        alt={image.altText}
        className="h-full object-cover"
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        src={image.url}
      />
      <Link
        href="/search"
        aria-label="Go to the shop"
        className="btn btn-secondary btn-sm absolute bottom-4 z-20 max-w-min whitespace-nowrap uppercase"
      >
        Shop now
      </Link>
    </figure>
  ));

  return (
    <>
      <div
        className={clsx(
          className,
          "pin relative grid w-full max-w-[100dvw] items-center py-0.5",
        )}
      >
        <div className="pin-wrap-sticky w-full snap-x">
          <div
            className="pin-wrap grid w-[calc((((100dvh_/_4)_*_3)_+_theme(gap[0.5]))_*_6)] gap-0.5"
            style={{
              gridTemplateColumns: `repeat(${images.length}, 1fr)`,
            }}
          >
            {imagesList}
          </div>
        </div>
      </div>
      <ScrollControls
        classNames={{
          controls: "absolute w-full z-20 text-light flex justify-between px-8",
          // controls: 'hidden',
          // ScrollAreaRoot: 'contents',
          // ScrollAreaViewport: 'contents [&>*]:!contents'
          ScrollAreaRoot: "w-full max-w-[100dvw] snap-x",
          ScrollAreaViewport:
            "grid w-[calc((((100dvh_/_4)_*_3)_+_theme(gap[0.5]))_*_6)] gap-0.5 [&>*]:!contents",
        }}
      >
        {imagesList}
      </ScrollControls>
    </>
  );
}

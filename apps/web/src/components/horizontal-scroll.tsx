import { server } from "@/clients/shopify";
import { Image } from "@/components/media/image";
import {
  getFragmentData,
  imageFragment,
  pageFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { notFound } from "next/navigation";

export async function HorizontalScroll({
  className,
  handle,
}: {
  className?: string;
  handle: string;
}) {
  const pageFragmentRef = await server.getPage(
    { handle },
  );

  const page = getFragmentData(
    pageFragment,
    pageFragmentRef,
  );

  if (!page) return notFound();

  const mediaImages = page.mediaImages?.references?.edges.map(
    (edge) => edge?.node,
  );

  return (
    <div
      className={cn(
        className,
        "pin relative grid w-full max-w-[100dvw] justify-items-center py-0.5",
      )}
    >
      <div className="pin-wrap-sticky w-full snap-x">
        <div
          className="pin-wrap grid w-[calc((((100dvh_/_4)_*_3)_+_theme(gap[0.5]))_*_6)] gap-0.5"
          style={{
            gridTemplateColumns: `repeat(${mediaImages?.length}, 1fr)`,
          }}
        >
          {mediaImages?.map((mediaImage, index) => {
            if (mediaImage.__typename !== "MediaImage") {
              return null;
            }

            const image = getFragmentData(imageFragment, mediaImage.image);

            if (!image) {
              return null;
            }

            return (
              <figure
                className="item aspect-3/4 relative w-full"
                key={mediaImage.id || index}
              >
                <Image
                  alt={image.altText || page.title}
                  className="h-full object-cover"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  src={image.url}
                />
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}

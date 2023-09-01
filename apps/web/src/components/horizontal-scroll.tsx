import { Image } from "@/components/image";
import { getFragmentData, getPage, imageFragment } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib/classname";
import { notFound } from "next/navigation";

export async function HorizontalScroll({ className }: { className?: string }) {
  const page = await getPage({ handle: "home" });

  if (!page) return notFound();

  const mediaImages = page.mediaImages.references.edges.map((edge) => edge?.node);

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
            gridTemplateColumns: `repeat(${mediaImages.length}, 1fr)`,
          }}
        >
          {mediaImages?.map((mediaImage, index) => {
            if (mediaImage.__typename !== "MediaImage") {
              return null;
            }
  
            const image = getFragmentData(imageFragment, mediaImage.image);

            return (
            <figure
              className="item aspect-3/4 relative w-full"
              key={mediaImage.id || index}
            >
              <Image
                alt={image.altText}
                className="h-full object-cover"
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                src={image.url}
              />
            </figure>
          )})}
        </div>
      </div>
    </div>
  );
}

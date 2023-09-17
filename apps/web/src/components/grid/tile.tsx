import { Image } from "@/components/media/image";
import { Video } from "@/components/media/video";
import { Price } from "@/components/price";
import {
  FragmentType,
  getFragmentData,
  imageFragment,
  videoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";

export function Tile({
  active = true,
  background = "black",
  className,
  image,
  isInteractive = true,
  labels,
  priority,
  video,
}: {
  active?: boolean;
  background?:
    | "hotPink"
    | "white"
    | "pink"
    | "purple"
    | "black"
    | "purple-dark"
    | "blue"
    | "cyan"
    | "gray";
  className?: string;
  image?: FragmentType<typeof imageFragment> | null;
  isInteractive?: boolean;
  labels: {
    title: string;
    amount?: string;
    currencyCode?: string;
  };
  priority?: boolean;
  video?: FragmentType<typeof videoFragment>;
}) {
  if (!active) {
    return null;
  }

  const tileImage = getFragmentData(imageFragment, image);
  const tileVideo = getFragmentData(videoFragment, video);

  return (
    <>
      <div
        className={cn("aspect-3/4 relative mb-4 w-full overflow-hidden", "[&:has(.video)_.image]:focus:opacity-0 [&:has(.video)_.image]:hover:opacity-0", {
          "bg-hotPink dark:bg-hotPink": background === "hotPink",
          "bg-white dark:bg-white": background === "white",
          "bg-[#ff0080] dark:bg-[#ff0080]": background === "pink",
          "bg-[#7928ca] dark:bg-[#7928ca]": background === "purple",
          "bg-gray-900 dark:bg-gray-900": background === "black",
          "bg-violetDark dark:bg-violetDark": background === "purple-dark",
          "bg-blue-500 dark:bg-blue-500": background === "blue",
          "bg-cyan-500 dark:bg-cyan-500": background === "cyan",
          "bg-gray-100 dark:bg-gray-100": background === "gray",
          "bg-gray-100 dark:bg-gray-900": !background,
        })}
      >
        {tileVideo?.__typename === "Video" && <Video
          {...tileVideo}
          className="video absolute inset-0"
          autoPlay
          loop
          muted
          playsInline
          url={tileVideo?.sources?.filter(source => source.format !== 'm3u8').map((source) => ({
            src: source.url,
            type: `video/${source.format}`,
          }))}
        />}
        <figure className="image">
          {tileImage?.url ? (
            <Image
              className={cn(
                "relative h-full w-full object-cover",
                {
                  "transition hover:scale-105": isInteractive,
                },
                className,
              )}
              alt={tileImage.altText ?? labels?.title}
              fill
              height={undefined}
              priority={priority}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              src={tileImage.url}
              width={undefined}
            />
          ) : null}
        </figure>
      </div>
      {labels?.amount && labels?.currencyCode ? (
        <footer>
          <h3
            data-testid="product-name"
            className={cn("mb-2 box-decoration-clone text-xs")}
          >
            {labels.title}
          </h3>
          <Price
            className="text-xs"
            amount={labels.amount}
            currencyCode={labels.currencyCode}
          />
        </footer>
      ) : null}
    </>
  );
}

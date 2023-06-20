import { HorizontalScroll } from "components/horizontal-scroll";
import { Video, type VideoProps } from "components/video";
import Image from "next/image";
import Link from "next/link";

export const runtime = "edge";

export const metadata = {
  description:
    "UNCNSRD is multifunctional swimwear for female figures who aren’t afraid to show off their assets and want to feel unapologetically sexy.",
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || "")}`,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

const video: VideoProps = {
  autoPlay: true,
  alt: "Campaign video",
  className: "snap-start",
  loop: true,
  playsinline: true,
  poster: "/videos/_2XUijBuSZw-1080pp-1687201373.png",
  // title: 'Video title',
  url: "/videos/_2XUijBuSZw-1080pp-1687201373.mp4",
};

export default async function HomePage() {
  return (
    <>
      <section className="relative grid max-h-[100dvh] snap-start items-center overflow-hidden">
        <Video {...video} className="" />
        <Link
          href="/search"
          aria-label="Go to the shop"
          className="absolute left-6 z-20 grid justify-items-center gap-4 p-6 uppercase text-white"
        >
          <h2 className="font-brand text-4xl">Pre-Launch Collection</h2>
          <span>Now live</span>
          <span className="btn btn-solid btn-secondary btn-base max-w-min whitespace-nowrap">
            Shop now
          </span>
        </Link>
      </section>
      <section className="relative grid snap-start bg-black">
        {/* @ts-expect-error Server Component */}
        <HorizontalScroll className="" />
      </section>
      <figure className="relative grid h-[100dvh] snap-start bg-black">
        <Image
          alt="Model wearing UNCNSRD swimwear"
          className="h-full object-cover"
          fill
          sizes="100vw"
          src="/images/MAV8814-cropped.png"
        />
      </figure>
    </>
  );
}

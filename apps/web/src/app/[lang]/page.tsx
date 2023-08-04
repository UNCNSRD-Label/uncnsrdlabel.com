import { themeColors } from "@uncnsrdlabel/lib/effects";
import { HomepageCarousel } from "@uncnsrdlabel/ui/components/homepage-carousel";
import { Image } from "@uncnsrdlabel/ui/components/image";
import { Logo } from "@uncnsrdlabel/ui/components/layout/logo";
import { Navbar } from "@uncnsrdlabel/ui/components/layout/navbar";
import { NavbarContent } from "@uncnsrdlabel/ui/components/layout/navbar/content";
import { Video, type VideoProps } from "@uncnsrdlabel/ui/components/video";
import Link from "next/link";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description:
    "UNCNSRD is multifunctional swimwear for female figures who aren’t afraid to show off their assets and want to feel unapologetically sexy.",
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(
          process.env.NEXT_PUBLIC_SITE_NAME || "",
        )}`,
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
  loop: true,
  playsinline: true,
  poster: "/videos/ZfGt0lKisCU.png",
  // title: 'Video title',
  url: "/videos/ZfGt0lKisCU.mp4",
};

export default async function HomePage() {
  return (
    <div className="dark">
      <div className={themeColors}>
        <Navbar>
          <NavbarContent />
        </Navbar>
        <main className="relative grid grid-rows-[1fr_auto]">
          <section className="relative grid h-[100dvh] items-center overflow-hidden sm:snap-start">
            <Suspense
              fallback={
                <Image
                  alt={video.alt}
                  className="absolute h-full object-cover"
                  fill
                  priority
                  sizes="100vw"
                  src={video.poster}
                  title={video.title}
                />
              }
            >
              <Video {...video} priority />
            </Suspense>
            <Link
              href="/search"
              aria-label="Go to the shop"
              className="btn btn-outline btn-primary btn-base absolute z-20 justify-self-center whitespace-nowrap uppercase"
            >
              Shop now
            </Link>
          </section>
          <section className="max-w-[100dvw] py-48 sm:snap-center">
            <HomepageCarousel />
          </section>
        </main>
        <Logo />
      </div>
    </div>
  );
}

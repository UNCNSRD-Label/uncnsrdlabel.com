import { HomepageCarousel } from "@/components/homepage-carousel";
import { Image } from "@/components/image";
import { Logo } from "@/components/layout/logo/index";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { Video, type VideoProps } from "@/components/video";
import { getIntl } from "@/lib/i18n/server";
import { themeColors } from "@uncnsrdlabel/lib";
import Link from "next/link";
import { Suspense } from "react";

// export const runtime = "edge";

// export const metadata = {
  
// };

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
  const intl = await getIntl("page.home");

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
              {intl.formatMessage({ id: "shop_now" })}
            </Link>
          </section>
          <section className="max-w-[100dvw] py-48 sm:snap-center">
            <Suspense fallback={<h2>An error occurred</h2>}>
              <HomepageCarousel />
            </Suspense>
          </section>
        </main>
        <Logo />
      </div>
    </div>
  );
}

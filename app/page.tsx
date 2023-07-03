import { HomepageCarousel } from "components/homepage-carousel";
import Logo from "components/layout/logo";
import Navbar from "components/layout/navbar";
import NavbarContent from "components/layout/navbar/content";
import { Video, type VideoProps } from "components/video";
import Link from "next/link";

export const runtime = "edge";

export const metadata = {
  description:
    "UNCNSRD is multifunctional swimwear for female figures who aren’t afraid to show off their assets and want to feel unapologetically sexy.",
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(
          process.env.NEXT_PUBLIC_SITE_NAME || ""
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
  poster: "/videos/_2XUijBuSZw-1080pp-1687201373.png",
  // title: 'Video title',
  url: "/videos/_2XUijBuSZw-1080pp-1687201373.mp4",
};

export default async function HomePage() {
  return (
    <>
      <Navbar>
        <NavbarContent />
      </Navbar>
      <main className="relative grid grid-rows-[1fr_auto]">
        <section className="relative grid h-[100dvh] items-center overflow-hidden sm:snap-start">
          <Video {...video} />
          <Link
            href="/search"
            aria-label="Go to the shop"
            className="btn btn-outline btn-primary btn-base absolute z-20 justify-self-center whitespace-nowrap uppercase"
          >
            Shop now
          </Link>
        </section>
        <section className="py-48 sm:snap-center">
          <HomepageCarousel />
        </section>
      </main>
      <Logo />
    </>
  );
}

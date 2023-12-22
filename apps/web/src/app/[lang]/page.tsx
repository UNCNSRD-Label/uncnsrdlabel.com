import { Logo } from "@/components/layout/logo/index";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { PageCarouselHydrated } from "@/components/page/carousel/page-carousel-hydrated";
import { VideosHydrated } from "@/components/page/videos/videos-hydrated";
import { getIntl } from "@/lib/i18n";
import { type PageProps } from "@/types/next";
import { Link } from "@uncnsrdlabel/components/atoms/link";

// export const runtime = "edge";

const handle = "home";

export default async function RootPage({ params: { lang } }: PageProps) {
  const intl = await getIntl(lang, `page.${handle}`);

  return (
    <>
      <Navbar className="z-50" offset sticky>
        <NavbarContent />
      </Navbar>
      <main className="bg-black dark relative grid grid-rows-[1fr_auto] gap-2 pb-48 z-40">
        <section className="relative grid h-[100dvh] items-center overflow-hidden sm:snap-start">
          <VideosHydrated handle={handle} />
          <Link
            aria-label={intl.formatMessage({ id: "shop-now" })}
            className="btn btn-outline btn-primary btn-base absolute z-20 justify-self-center whitespace-nowrap uppercase"
            href="/search"
          >
            {intl.formatMessage({ id: "shop-now" })}
          </Link>
        </section>
        <section className="max-w-[100dvw] sm:snap-center">
          <PageCarouselHydrated handle={handle} />
        </section>
      </main>
      <Logo className="fill-white" />
    </>
  );
}

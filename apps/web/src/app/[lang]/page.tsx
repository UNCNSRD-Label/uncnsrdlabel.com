import { Logo } from "@/components/layout/logo/index";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { PageCarousel } from "@/components/page/carousel/page-carousel";
import { VideosHydrated } from "@/components/page/videos/videos-hydrated";
import { getIntl } from "@/lib/i18n/server";
import { type PageProps } from "@/types/next";
import { Link } from "@uncnsrdlabel/components/atoms/link";

const handle = "home";

export default async function RootPage({ params: { lang } }: PageProps) {
  const intl = getIntl(lang);

  return (
    <>
      <Navbar className="z-50" offset sticky>
        <NavbarContent lang={lang} />
      </Navbar>
      <main className="dark relative z-40 grid grid-rows-[1fr_auto] gap-2 bg-black pb-48">
        <section className="relative grid h-[100dvh] items-center overflow-hidden sm:snap-start">
          <VideosHydrated handle={handle} />
          <Link
            aria-label={intl.formatMessage({ id: `page.${handle}.shop-now` })}
            className="btn btn-outline btn-primary btn-base absolute z-20 justify-self-center whitespace-nowrap uppercase"
            href="/search/all"
          >
            {intl.formatMessage({ id: `page.${handle}.shop-now` })}
          </Link>
        </section>
        <PageCarousel
          className="h-[calc(100dvw_*_1.5)] sm:h-[calc(50dvw_*_1.5)] lg:h-[calc(33.33dvw_*_1.5)]"
          handle={handle}
        />
      </main>
      <Logo className="fill-white" />
    </>
  );
}

import { Logo } from "@/components/layout/logo/index";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { PageCarouselHydrated } from "@/components/page/carousel/page-carousel-hydrated";
import { VideosHydrated } from "@/components/page/videos/videos-hydrated";
import { getIntl } from "@/lib/i18n";
import { themeColors } from "@/lib/tailwind";
import { type PageProps } from "@/types/next";
import { Link } from "@uncnsrdlabel/components/atoms/link";

// export const runtime = "edge";

export default async function RootPage({ params: { lang } }: PageProps) {
  const handle = "home";

  const intl = await getIntl(lang, `page.${handle}`);

  return (
    <div className="dark min-h-[100dvh]">
      <div className={themeColors}>
        <Navbar>
          <NavbarContent />
        </Navbar>
        <main className="relative grid grid-rows-[1fr_auto]">
          <section className="relative grid h-[100dvh] items-center overflow-hidden sm:snap-start">
            <VideosHydrated handle={handle} />
            <Link
              aria-label={intl.formatMessage({ id: "shop_now" })}
              className="btn btn-outline btn-primary btn-base absolute z-20 justify-self-center whitespace-nowrap uppercase"
              href="/search"
            >
              {intl.formatMessage({ id: "shop_now" })}
            </Link>
          </section>
          <section className="max-w-[100dvw] py-48 sm:snap-center">
            <PageCarouselHydrated handle={handle} />
          </section>
        </main>
        <Logo />
      </div>
    </div>
  );
}

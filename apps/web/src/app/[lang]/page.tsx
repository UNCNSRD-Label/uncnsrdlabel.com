import { Logo } from "@/components/layout/logo/index";
import { Navbar } from "@/components/layout/navbar/index";
import { PageCarousel } from "@/components/page/carousel/page-carousel";
import { VideosHydrated } from "@/components/page/videos/videos-hydrated";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { createIntl } from "@formatjs/intl";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import { type ResolvedIntlConfig } from "react-intl";

const handle = "home";

export default async function Page({ params: { lang } }: PageProps) {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return (
    <>
      <Navbar className="sticky left-0 z-10 top-safeTop fill-light stroke-light text-light" lang={lang} />
      <main className="dark relative grid grid-rows-[1fr_auto] gap-2 bg-black pb-32">
        <h1 className="sr-only">{intl.formatMessage({ id: "global.metadata.title" })}</h1>
        <section className="relative grid h-[100dvh] items-center overflow-hidden sm:snap-start">
          <h2 className="sr-only">{intl.formatMessage({ id: `page.${handle}.campaign-video.title` })}</h2>
          <VideosHydrated handle={handle} lang={lang} />
          <Link
            aria-label={intl.formatMessage({ id: `page.${handle}.campaign-video.shop-now` })}
            className="btn btn-outline btn-primary btn-base absolute z-20 justify-self-center whitespace-nowrap uppercase"
            href="/search/all"
          >
            {intl.formatMessage({ id: `page.${handle}.campaign-video.shop-now` })}
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

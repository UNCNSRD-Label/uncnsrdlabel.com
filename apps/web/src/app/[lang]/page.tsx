import { Logo } from "@/components/layout/logo/index";
import { Navbar } from "@/components/layout/navbar/index";
import { NavigationEvents } from "@/components/navigation-events";
import { PageCarousel } from "@/components/page/carousel/page-carousel";
import { Videos } from "@/components/page/videos/videos";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { createIntl } from "@formatjs/intl";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  getShopifyGraphQL,
  pageQuery
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { Suspense } from "react";
import { type ResolvedIntlConfig } from "react-intl";

export const revalidate = 900;

const handle = "home";

export default async function Page({ params: { lang } }: PageProps) {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const variables = { handle };

  const { page: pageFragmentRef } = await getShopifyGraphQL(pageQuery, variables);

  if (pageFragmentRef?.__typename !== "Page") {
    throw new Error("Page query is not a page type.");
  }

  return (
    <>
      <Navbar
        className="top-safeTop fill-light stroke-light text-light sticky left-0 z-10"
        lang={lang}
      />
      <main className="dark relative grid grid-rows-[1fr_auto] gap-2 bg-black pb-32">
        <h1 className="sr-only">
          {intl.formatMessage({ id: "global.metadata.title" })}
        </h1>
        <section className="relative grid h-[100dvh] items-center overflow-hidden sm:snap-start">
          <h2 className="sr-only">
            {intl.formatMessage({ id: `page.${handle}.campaign-video.title` })}
          </h2>
          <Videos pageFragmentRef={pageFragmentRef} />
          <Link
            aria-label={intl.formatMessage({
              id: `page.${handle}.campaign-video.shop-now`,
            })}
            className="btn btn-outline btn-primary btn-base absolute justify-self-center whitespace-nowrap uppercase"
            href="/search/all"
          >
            {intl.formatMessage({
              id: `page.${handle}.campaign-video.shop-now`,
            })}
          </Link>
        </section>
        <PageCarousel
          className="h-[calc(100dvw_*_1.5)] sm:h-[calc(50dvw_*_1.5)] lg:h-[calc(33.33dvw_*_1.5)] xl:h-[calc(25vw_*_1.5)]"
          handle={handle}
        />
      </main>
      <Logo className="fill-white" />
      <Suspense fallback={null}>
        <NavigationEvents pageType="home" />
      </Suspense>
    </>
  );
}

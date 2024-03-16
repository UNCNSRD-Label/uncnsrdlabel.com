import { Logo } from "@/components/layout/logo/index";
import { NavigationEvents } from "@/components/navigation-events";
import { getDictionary } from "@/lib/dictionary";
import { createIntl } from "@formatjs/intl";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import { headers } from "next/headers";
import { Suspense } from "react";
import { type ResolvedIntlConfig } from "react-intl";

const handle = "not-found";

export default async function NotFound() {
  const headersList = headers();

  const acceptLanguage = headersList.get("Accept-Language");

  const acceptLanguageCodes = acceptLanguage?.split(";")?.[0]?.split(",");

  let lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE!;

  if (acceptLanguageCodes) {
    for (const acceptLanguageCode of acceptLanguageCodes) {
      const [canonicalLocale] = Intl.getCanonicalLocales(acceptLanguageCode);

      if (canonicalLocale) {
        lang = canonicalLocale;
      }
    }
  }

  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return (
    <>
      <div className="min-h-[50dvh] grid place-content-center place-items-center gap-4 pb-32">
        <h1 className="text-lg">
          {intl.formatMessage({ id: `page.${handle}.title` })}
        </h1>
        <span className="text-sm mb-12">
          {intl.formatMessage({ id: `page.${handle}.message` })}
        </span>
        <Link
          aria-label={intl.formatMessage({ id: `page.${handle}.link` })}
          className="btn btn-outline btn-primary btn-base uppercase"
          href="/collections/all"
        >
          {intl.formatMessage({ id: `page.${handle}.link` })}
        </Link>
      </div>
      <Logo />
      <Suspense fallback={null}>
        <NavigationEvents pageType="notFound" />
      </Suspense>
    </>
  );
}

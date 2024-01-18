import { Boundary } from "@/components/boundary";
import { getDictionary } from "@/lib/dictionary";
import { createIntl } from "@formatjs/intl";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import { headers } from "next/headers";
import { type ResolvedIntlConfig } from "react-intl";

const handle = "not-found";

export default async function NotFound() {
  const headersList = headers();

  const acceptLanguage = headersList.get("Accept-Language");

  const acceptLanguageCodes = acceptLanguage?.split(";")?.[0]?.split(",");

  let lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE!;

  if (acceptLanguageCodes) {
    for (const acceptLanguageCode of acceptLanguageCodes) {
      // @ts-expect-error Property 'getCanonicalLocales' does not exist on type 'typeof Intl'.
      const [canonicalLocale] = Intl.getCanonicalLocales(acceptLanguageCode);
  
      if (canonicalLocale) {
        lang = canonicalLocale;
      }
    }
  }

  console.log({ lang }, "NotFound");

  const messages: ResolvedIntlConfig["messages"] = await getDictionary({
    lang,
  });

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return (
    <Boundary labels={["not-found.tsx"]} color="pink">
      <div className="text-vercel-pink space-y-4">
        <h2 className="text-lg font-bold">
          {intl.formatMessage({ id: `page.${handle}.title` })}
        </h2>
        <span className="text-sm">
          {intl.formatMessage({ id: `page.${handle}.message` })}
        </span>
        <Link
          aria-label={intl.formatMessage({ id: `page.${handle}.button` })}
          className="btn btn-outline btn-primary btn-base absolute z-20 justify-self-center whitespace-nowrap uppercase"
          href="/collections/all"
        >
          {intl.formatMessage({ id: `page.${handle}.button` })}
        </Link>
      </div>
    </Boundary>
  );
}

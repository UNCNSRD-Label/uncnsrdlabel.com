import { ConsentTrigger } from "@/components/consent/trigger";
import { LogotypeIcon } from "@/components/icons/logotype";
import { SignUp } from "@/components/sign-up";
import { SocialMenu } from "@/components/social-menu";
import { getDictionary } from "@/lib/dictionary";
import { themeColors } from "@/lib/tailwind";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import { LocationDialog } from "@/components/location/dialog";
import { getMenuHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import { createIntl, type ResolvedIntlConfig } from "react-intl";

const { NEXT_PUBLIC_SITE_NAME } = process.env;

export async function Footer({ lang }: { lang: Intl.BCP47LanguageTag; }) {
  const messages: ResolvedIntlConfig["messages"] = await getDictionary({ lang });

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const currentYear = new Date().getFullYear();

  const customerCareMenu = await getMenuHandler({
    variables: { handle: "customer-care" },
    lang,
  });

  const informationMenu = await getMenuHandler({
    variables: { handle: "information" },
    lang,
  });

  const followUsMenu = await getMenuHandler({
    variables: { handle: "follow-us" },
    lang,
  });

  const linkClassName =
    "text-xs sm:text-xxs transition uppercase duration-150 ease-in-out text-start";

  return (
    <footer className="dark relative z-40 self-end border-t border-inherit sm:snap-start [contain:layout_style]">
      <div className={themeColors}>
        <div className="mx-auto w-full max-w-7xl px-6 pb-12">
          <div className="grid grid-cols-1 items-start gap-8 border-b border-inherit py-6 transition-colors duration-150 sm:grid-cols-12 sm:py-12">
            <nav className="col-span-1 grid gap-8 sm:col-span-12 sm:grid-cols-12 lg:col-span-8 lg:grid-cols-9">
              {customerCareMenu.items?.length ? (
                <dl className="grid content-start gap-2 sm:col-span-4 sm:grid-flow-row lg:col-span-3">
                  <dt className="text-sm uppercase">
                    {intl.formatMessage({ id: "global.footer.menu.customer-care" })}
                  </dt>
                  {customerCareMenu.items.map((item, index) => (
                    <dd key={item.title || index}>
                      <Link href={item.url ?? "#"} className={linkClassName}>
                        {item.title}
                      </Link>
                    </dd>
                  ))}
                  <dd>
                    <ConsentTrigger className={linkClassName} lang={lang} />
                  </dd>
                  <dd>
                    <LocationDialog className={linkClassName} />
                  </dd>
                </dl>
              ) : null}
              {informationMenu.items?.length ? (
                <dl className="grid content-start gap-2 sm:col-span-4 sm:grid-flow-row lg:col-span-3">
                  <dt className="text-sm uppercase">
                    {intl.formatMessage({ id: "global.footer.menu.information" })}
                  </dt>
                  {informationMenu.items.map((item, index) => (
                    <dd key={item.title || index}>
                      <Link href={item.url ?? "#"} className={linkClassName}>
                        {item.title}
                      </Link>
                    </dd>
                  ))}
                  {/* <dd>
                    <RedeemCode className={linkClassName} />
                  </dd> */}
                </dl>
              ) : null}
              <div className="grid gap-4 sm:col-span-4 sm:grid-flow-row lg:col-span-3">
                {followUsMenu.items?.length ? (
                  <dl className="grid content-start gap-2">
                    <dt className="text-sm uppercase">
                      {intl.formatMessage({ id: "global.footer.menu.follow-us" })}
                    </dt>
                    {followUsMenu.items.map((item, index) => (
                      <dd key={item.title || index}>
                        <Link
                          className={linkClassName}
                          href={item.url ?? "#"}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {item.title}
                        </Link>
                      </dd>
                    ))}
                  </dl>
                ) : null}
              </div>
            </nav>
            <SignUp className="lg:col-start-0 col-span-1 sm:col-span-6 sm:col-start-7 lg:col-span-4" lang={lang} />
          </div>
          <div className="flex flex-col items-center justify-between text-xs uppercase sm:flex-row sm:pt-6">
            <SocialMenu className="my-8 h-10 sm:my-0" />
            <span className="sm:order-first">
              {intl.formatMessage(
                { id: "global.footer.copyright" },
                { currentYear, siteName: NEXT_PUBLIC_SITE_NAME },
              )}
            </span>
          </div>
          <LogotypeIcon className="mx-auto mt-8 h-6 fill-inherit drop-shadow transition duration-300 ease-in-out hover:scale-110 sm:hidden sm:h-10 " />
        </div>
      </div>
    </footer>
  );
}

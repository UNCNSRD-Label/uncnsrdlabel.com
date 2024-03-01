import { getDictionary } from "@/lib/dictionary";
import { createIntl } from "@formatjs/intl";
import {
  Card,
  CardContent,
  CardHeader,
} from "@uncnsrdlabel/components/atoms/card";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import { getMenuHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { type ResolvedIntlConfig } from "react-intl";

export async function Nav({
  className,
  handle,
  lang,
}: {
  className?: string;
  handle: string;
  lang: Intl.BCP47LanguageTag;
}) {
  const messages: ResolvedIntlConfig["messages"] = await getDictionary({
    lang,
  });

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const customerCareMenu = await getMenuHandler({
    lang,
    variables: {
      handle: "customer-care",
    },
  });

  return (
    <div
      className={cn(
        "bg-opaque-white relative h-fit content-start p-10 sm:p-8 md:grid",
        className,
      )}
    >
      <Card className="bg-transparent p-4">
        <CardHeader className="grid gap-4">
          <h2 className="text-sm uppercase">
            {intl.formatMessage({
              id: "page.policy.nav.title",
            })}
          </h2>
        </CardHeader>
        <CardContent className="grid content-start gap-4">
          <nav className="grid list-none gap-4">
            {customerCareMenu?.items?.map((item, index) => (
              <dd key={item.title || index}>
                <Link
                  className={cn(
                    "text-xs uppercase transition duration-150 ease-in-out",
                    {
                      "underline decoration-dotted underline-offset-8":
                        item.url?.endsWith(handle),
                    },
                  )}
                  href={item.url ?? "#"}
                >
                  {item.title}
                </Link>
              </dd>
            ))}
          </nav>
        </CardContent>
      </Card>
    </div>
  );
}

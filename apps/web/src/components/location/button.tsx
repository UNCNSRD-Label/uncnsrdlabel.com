"use client";

import { createIntl } from "@formatjs/intl";
import { type ResultOf } from "@graphql-typed-document-node/core";
import { Button } from "@uncnsrdlabel/components/ui/button";
import { Usable, use } from "react";
import ReactCountryFlag from "react-country-flag";
import { type ResolvedIntlConfig } from "react-intl";
// import { ScrollArea } from "@uncnsrdlabel/components/atoms/scroll-area";
import { getLocalizationDetailsQuery } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";

export function LocationButton({
  className,
  dictionary,
  lang,
  localizationDetails,
  onClick,
}: {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
  localizationDetails: Usable<
    ResultOf<typeof getLocalizationDetailsQuery>["localization"]
  >;
  onClick?: () => void;
}) {
  const localization =
    use<ResultOf<typeof getLocalizationDetailsQuery>["localization"]>(
      localizationDetails,
    );

  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return (
    <Button
      className={cn("flex flex-col gap-4", className)}
      onClick={onClick}
      variant="ghost"
    >
      <span>
        {intl.formatMessage({ id: "component.LocationDialog.trigger" })}
      </span>
      <span>
        <ReactCountryFlag
          className="mr-2"
          countryCode={localization.country.isoCode}
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
          title={localization.country.name}
        />
        {localization.country.name} ({localization.language.name})
      </span>
    </Button>
  );
}

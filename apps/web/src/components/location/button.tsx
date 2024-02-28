"use client";

import { createIntl } from "@formatjs/intl";
import { type ResultOf } from "@graphql-typed-document-node/core";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import { localizationDetailsQuery } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { Usable, use } from "react";
import ReactCountryFlag from "react-country-flag";
import { type ResolvedIntlConfig } from "react-intl";

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
    ResultOf<typeof localizationDetailsQuery>["localization"]
  >;
  onClick?: () => void;
}) {
  const localization =
    use<ResultOf<typeof localizationDetailsQuery>["localization"]>(
      localizationDetails,
    );

  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return (
    <Button
      aria-label={intl.formatMessage({
        id: "component.LocationDialog.trigger",
      })}
      className={cn("flex flex-col gap-4", className)}
      onClick={onClick}
      variant="ghost"
    >
      <div className="flex gap-2 items-center">
        <ReactCountryFlag
          className="border border-white object-cover"
          countryCode={localization.country.isoCode}
          svg
          style={{
            width: "6em",
            height: "4.5em",
          }}
          title={localization.country.name}
        />
        <div className="grid gap-2 justify-start items-start">
          <span className="text-start">{localization.country.name}</span>
          <span className="text-start">{localization.language.name}</span>
        </div>
      </div>
    </Button>
  );
}

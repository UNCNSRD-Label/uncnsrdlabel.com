"use client";

import { createIntl } from "@formatjs/intl";
import { type ResultOf } from "@graphql-typed-document-node/core";
import { useMediaQuery } from "@react-hookz/web";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@uncnsrdlabel/components/atoms/command";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@uncnsrdlabel/components/atoms/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@uncnsrdlabel/components/atoms/popover";
import { getLocalizationDetailsQuery } from "@uncnsrdlabel/graphql-shopify-storefront";
import { useRouter } from "next/navigation";
import { Usable, use, useState } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import { useTrack } from "use-analytics";

type LocationComboBoxResponsiveProps = {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
  localizationDetails: Usable<
    ResultOf<typeof getLocalizationDetailsQuery>["localization"]
  >;
};

export function LocationComboBoxResponsive({
  localizationDetails,
  className,
  dictionary,
  lang,
}: LocationComboBoxResponsiveProps) {
  const [open, setOpen] = useState(false);
  const isMd = useMediaQuery("only screen and (min-width : 768px)");

  const localization =
    use<ResultOf<typeof getLocalizationDetailsQuery>["localization"]>(
      localizationDetails,
    );

  if (isMd) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="justify-start">
            {localization.country.name} ({localization.language.name})
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList
            className={className}
            dictionary={dictionary}
            lang={lang}
            localizationDetails={localizationDetails}
            setOpen={setOpen}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="justify-start">
          {localization.country.name} ({localization.language.name})
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList
            className={className}
            dictionary={dictionary}
            lang={lang}
            localizationDetails={localizationDetails}
            setOpen={setOpen}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({
  className,
  dictionary,
  lang,
  localizationDetails,
  setOpen,
  // setSelectedStatus,
}: LocationComboBoxResponsiveProps & {
  setOpen: (open: boolean) => void;
  // setSelectedStatus: (status: ResultOf<typeof getLocalizationDetailsQuery>['localization']['country'] | null) => void
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const router = useRouter();

  const track = useTrack();

  const localization =
    use<ResultOf<typeof getLocalizationDetailsQuery>["localization"]>(
      localizationDetails,
    );

  const availableCountries = localization.availableCountries;

  const BCP47LanguageTagCommandItems = availableCountries?.flatMap(
    (availableCountry) =>
      availableCountry?.availableLanguages.map((availableLanguage) => {
        const BCP47LanguageTag =
          `${availableLanguage.isoCode.toLocaleLowerCase()}-${
            availableCountry.isoCode
          }` as Intl.BCP47LanguageTag;
        return (
          <CommandItem
            key={BCP47LanguageTag}
            value={BCP47LanguageTag}
            onSelect={(value) => {
              setOpen(false);

              // @ts-expect-error Property 'getCanonicalLocales' does not exist on type 'typeof Intl'.
              const [canonicalLocale] = Intl.getCanonicalLocales(value);
  
              if (canonicalLocale) {
                lang = canonicalLocale;
              }

              router.push(`/${canonicalLocale}`);
            }}
          >
            {availableCountry.name} ({availableLanguage.name})
          </CommandItem>
        );
      }),
  );

  return (
    <Command className={className}>
      <CommandInput
        placeholder={intl.formatMessage({
          id: "component.LocationComboBox.StatusList.enter-country-name",
        })}
      />
      <CommandList>
        <CommandEmpty>
          {intl.formatMessage(
            { id: "component.LocationComboBox.StatusList.results" },
            { results: 0 },
          )}
        </CommandEmpty>
        <CommandGroup>{BCP47LanguageTagCommandItems}</CommandGroup>
      </CommandList>
    </Command>
  );
}

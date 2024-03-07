"use client";

import { breakpoints } from "@/lib/tailwind";
import { createIntl } from "@formatjs/intl";
import { type ResultOf } from "@graphql-typed-document-node/core";
import { useMediaQuery } from "@react-hookz/web";
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@uncnsrdlabel/components/atoms/select";
import { localizationDetailsQuery } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { useRouter } from "next/navigation";
import { Usable, use, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { type ResolvedIntlConfig } from "react-intl";
import { useTrack } from "use-analytics";

type LocationComboBoxResponsiveProps = {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
  localizationDetails: Usable<
    ResultOf<typeof localizationDetailsQuery>["localization"]
  >;
};

export function LocationComboBoxResponsive({
  localizationDetails,
  className,
  dictionary,
  lang,
}: LocationComboBoxResponsiveProps) {
  const [open, setOpen] = useState(false);

  const mediaQueries = Object.fromEntries(
    Object.entries(breakpoints).map(([key, values]) => [
      key,
      useMediaQuery(`only screen and (min-width : ${values.min.toString()})`),
    ]),
  );

  const router = useRouter();

  const track = useTrack();

  const localization =
    use<ResultOf<typeof localizationDetailsQuery>["localization"]>(
      localizationDetails,
    );

  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const SelectContentItems = localization.availableCountries
    .sort((a, b) => a.name.localeCompare(b.name))
    ?.flatMap((availableCountry) => {
      return (
        <SelectGroup key={availableCountry.isoCode}>
          <SelectLabel className="mt-4 flex gap-4 font-bold uppercase">
            <ReactCountryFlag
              className="border border-black object-cover"
              countryCode={availableCountry.isoCode}
              svg
              style={{
                width: "2em",
                height: "1.5em",
              }}
              title={availableCountry.name}
            />
            {availableCountry.name}
          </SelectLabel>
          {availableCountry?.availableLanguages.map((availableLanguage) => {
            const BCP47LanguageTag =
              `${availableLanguage.isoCode.toLocaleLowerCase()}-${
                availableCountry.isoCode
              }` as Intl.BCP47LanguageTag;
            return (
              <SelectItem
                className="cursor-pointer"
                key={BCP47LanguageTag}
                value={BCP47LanguageTag}
              >
                {availableCountry.name} ({availableLanguage.name})
              </SelectItem>
            );
          })}
        </SelectGroup>
      );
    });

  if (mediaQueries.md) {
    return (
      <>
        <Select
          onValueChange={(value) => {
            setOpen(false);

            const [canonicalLocale] = Intl.getCanonicalLocales(value);

            track("change_locale", { locale: canonicalLocale });

            router.push(`/${canonicalLocale}`);
          }}
        >
          <SelectTrigger className="border ring-1 ring-black ring-offset-2 focus:ring-1">
            <SelectValue
              placeholder={intl.formatMessage({
                id: "component.LocationComboBox.StatusList.select-locale",
              })}
            />
          </SelectTrigger>
          <SelectContent className="max-h-[50dvh] pb-4 md:max-h-[75dvh]">
            {SelectContentItems}
          </SelectContent>
        </Select>
        <div className="flex items-center gap-2">
          <ReactCountryFlag
            className="border border-black object-cover"
            countryCode={localization.country.isoCode}
            svg
            style={{
              width: "6em",
              height: "4.5em",
            }}
            title={localization.country.name}
          />
          <div className="grid items-start justify-start gap-2">
            <span className="text-start">{localization.country.name}</span>
            <span className="text-start">{localization.language.name}</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <span className="mb-4 block border border-black p-2">
          {intl.formatMessage({
            id: "component.LocationComboBox.StatusList.select-locale",
          })}
        </span>
        <div className="flex items-center gap-2">
          <ReactCountryFlag
            className="border border-black object-cover"
            countryCode={localization.country.isoCode}
            svg
            style={{
              width: "6em",
              height: "4.5em",
            }}
            title={localization.country.name}
          />
          <div className="grid items-start justify-start gap-2">
            <span className="text-start">{localization.country.name}</span>
            <span className="text-start">{localization.language.name}</span>
          </div>
        </div>
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
}: LocationComboBoxResponsiveProps & {
  setOpen: (open: boolean) => void;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const router = useRouter();

  const track = useTrack();

  const localization =
    use<ResultOf<typeof localizationDetailsQuery>["localization"]>(
      localizationDetails,
    );

  const BCP47LanguageTagCommandItems = localization.availableCountries?.flatMap(
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

              const [canonicalLocale] = Intl.getCanonicalLocales(value);

              track("change_locale", { locale: canonicalLocale });

              router.push(`/${canonicalLocale}`);
            }}
          >
            {availableCountry.name} ({availableLanguage.name})
          </CommandItem>
        );
      }),
  );

  return (
    <Command className={cn(className)}>
      <CommandInput
        className="border-none focus:ring-0"
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

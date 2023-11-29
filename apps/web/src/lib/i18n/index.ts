import {
    getLocalizationHandler,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { type IETFLanguageTag } from "@uncnsrdlabel/types";
import { type AlternateURLs } from "next/dist/lib/metadata/types/alternative-urls-types";

export const getAlternativeLanguages = async (path?: string) => {
    const localization = await getLocalizationHandler();

    const IETFLanguageTags = localization.availableCountries.flatMap((availableCountry) => availableCountry.availableLanguages.map((availableLanguage) => `${availableCountry.isoCode}-${availableLanguage.isoCode}` as unknown as IETFLanguageTag))

    const AlternateLinkDescriptors = IETFLanguageTags.map((IETFLanguageTag) => ({
        title: IETFLanguageTag,
        url: path ? `/${IETFLanguageTag}/${path}` : `/${IETFLanguageTag}`,
    })) as unknown as Required<AlternateURLs['languages']>;

    return AlternateLinkDescriptors
}
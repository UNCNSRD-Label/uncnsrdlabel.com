import {
    getIETFLanguageTagFromlocaleTag,
    locales
} from "@uncnsrdlabel/lib";

export const languagesArray = (path: string) => locales.map((locale) => [
    getIETFLanguageTagFromlocaleTag(locale),
    [
        {
            title: getIETFLanguageTagFromlocaleTag(locale),
            url: `/${locale}/${path}`,
        },
    ],
]);
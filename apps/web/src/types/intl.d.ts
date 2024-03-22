import { type Schema } from 'bcp-47';

declare namespace Intl {
    function getCanonicalLocales(locales: string | string[]): string[];

    class RelativeTimeFormat {
        constructor(locale: string);

        // TODO Add other properties/methods
    }
    // const RelativeTimeFormat: any; // Use this instead of the class if you don't want to declare all properties/methods

    class ListFormat {
        constructor(locale: string);

        // TODO Add other properties/methods
    }
    // const ListFormat: any; // Use this instead of the class if you don't want to declare all properties/methods

    type BCP47LanguageTag = Schema['languageTag'];
}
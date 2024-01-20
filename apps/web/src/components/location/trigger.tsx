import { getDictionary } from "@/lib/dictionary";
import { Suspense } from "react";
import { LocationDialog } from "./dialog";

export function LocationTrigger({ className, lang }: { className?: string; lang: Intl.BCP47LanguageTag; }) {
  const dictionary = getDictionary({ lang });

  return (
    <Suspense fallback={null}>
        <LocationDialog className={className} dictionary={dictionary} lang={lang} />
    </Suspense>
  );
}

import { getDictionary } from "@/lib/dictionary";
import { Suspense } from "react";
import { ConsentButton } from "./button";
import { ConsentDialog } from "./dialog";

export function ConsentTrigger({ className, lang }: { className?: string; lang: Intl.BCP47LanguageTag; }) {
  const dictionary = getDictionary({ lang });

  return (
    <Suspense fallback={<ConsentButton className={className} lang={lang}/>}>
        <ConsentDialog className={className} dictionary={dictionary} lang={lang} />
    </Suspense>
  );
}

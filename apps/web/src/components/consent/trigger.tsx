import { getDictionary } from "@/lib/dictionary";
import { Suspense } from "react";
import { ConsentDialog } from "./dialog";

export function ConsentTrigger({
  className,
  lang,
}: {
  className?: string;
  lang: Intl.BCP47LanguageTag;
}) {
  const dictionary = getDictionary({ lang });

  return (
    <Suspense fallback={null}>
      <ConsentDialog
        className={className}
        dictionary={dictionary}
        lang={lang}
      />
    </Suspense>
  );
}

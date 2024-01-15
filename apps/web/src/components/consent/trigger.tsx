import { getDictionary } from "@/lib/dictionary";
import { state$ } from "@/lib/store";
import { Suspense } from "react";
import { ConsentButton } from "./button";
import { ConsentDialog } from "./dialog";

export function ConsentTrigger({ className }: { className?: string }) {
  const lang = state$.lang.get();

  const dictionary = getDictionary({ lang });

  return (
    <Suspense fallback={<ConsentButton className={className} />}>
        <ConsentDialog className={className} dictionary={dictionary} />
    </Suspense>
  );
}

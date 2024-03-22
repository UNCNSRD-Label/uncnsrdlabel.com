import { getDictionary } from "@/lib/dictionary";
import { getLocalizationDetailsHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import { Suspense } from "react";
import { LocationDialog } from "./dialog";

export async function LocationTrigger({
  className,
  lang,
}: {
  className?: string;
  lang: Navigator['language'];
}) {
  const localizationDetailsHandler = getLocalizationDetailsHandler({ lang });
  const dictionary = getDictionary({ lang });

  return (
    <Suspense fallback={null}>
      <LocationDialog
        className={className}
        dictionary={dictionary}
        lang={lang}
        localizationDetails={localizationDetailsHandler}
      />
    </Suspense>
  );
}

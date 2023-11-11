"use server";

import { getIntl } from "@/lib/i18n/server";
import { state$ } from "@/lib/store";
import { SubmitButton } from "./add-to-cart";

export async function AddToCartShell() {
  const lang = state$.lang.get();

  const intl = await getIntl(lang, `component.AddToCart`);

  return (
    <form>
      <SubmitButton availableForSale={false} selectedVariantId={undefined} />
      <span aria-live="polite" className="sr-only" role="status">
        {intl.formatMessage({ id: "select_options" })}
      </span>
    </form>
  );
}

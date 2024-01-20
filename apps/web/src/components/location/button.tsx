"use client";

import { createIntl } from "@formatjs/intl";
import { Button } from "@uncnsrdlabel/components/ui/button";
import { Usable, use } from "react";
import { type ResolvedIntlConfig } from "react-intl";

export function LocationButton({
  className,
  dictionary,
  lang,
  onClick,
}: {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
  onClick?: () => void;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return (
    <Button className={className} onClick={onClick} variant="ghost">
      {intl.formatMessage({ id: "component.LocationDialog.trigger" })}
    </Button>
  );
}

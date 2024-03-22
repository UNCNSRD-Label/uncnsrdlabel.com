"use client";

import { createIntl } from "@formatjs/intl";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import { cn } from "@uncnsrdlabel/lib";
import { Usable, use } from "react";
import { SlMagnifier } from "react-icons/sl";
import { type ResolvedIntlConfig } from "react-intl";

export function SearchButton({
  dictionary,
  isOpen,
  lang,
}: {
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  isOpen: boolean;
  lang: Navigator['language'];
}) {
  if (!lang) {
    console.error("No lang in SearchButton");
  }

  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return (
    <Button
      aria-label={intl.formatMessage({ id: "component.SearchButton.submit" })}
      className={cn("btn", {
        "open": isOpen
      })}
      data-testid="submit-search"
      form="search-form"
      variant="ghost"
    >
      <SlMagnifier className="icon fill h-5 w-5" />
    </Button>
  );
}

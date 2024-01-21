"use client";

import { LoadingDots } from "@/components/loading/dots";
import { LocationComboBoxResponsive } from "@/components/location/combobox-responsive";
import { createIntl } from "@formatjs/intl";
import { type ResultOf } from "@graphql-typed-document-node/core";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useTimeoutEffect } from "@react-hookz/web";
import { Button } from "@uncnsrdlabel/components/ui/button";
import { getLocalizationDetailsQuery } from "@uncnsrdlabel/graphql-shopify-storefront";
import { COOKIE_LOCATION } from "@uncnsrdlabel/lib";
import { hasCookie } from "cookies-next";
import { Suspense, Usable, use, useState } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import { useTrack } from "use-analytics";
import { LocationButton } from "./button";

export function LocationDialog({
  localizationDetails,
  className,
  dictionary,
  lang,
}: {
  localizationDetails: Usable<ResultOf<typeof getLocalizationDetailsQuery>['localization']>;
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const [open, setOpen] = useState(false);

  const track = useTrack();

  useTimeoutEffect(
    () => {
      setOpen(true);
    },
    hasCookie(COOKIE_LOCATION) ? undefined : 5_000,
  );

  const onClose = () => {
    track("location_close");

    setOpen(false);

    console.info("Closing dialog");
  };

  const onOpen = () => {
    setOpen(true);

    console.info("Opening dialog");
  };

  return (
    <>
      <LocationButton
        className={className}
        dictionary={dictionary}
        lang={lang}
        localizationDetails={localizationDetails}
        onClick={onOpen}
      />
      <Dialog.Root onOpenChange={setOpen} open={open}>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-black/80" />
          <Dialog.Content
            className="data-[state=open]:animate-contentShow fixed inset-x-4 bottom-4 z-50 grid gap-4 overflow-auto rounded border bg-inherit px-8 pb-8 pt-6 sm:left-auto sm:max-h-[calc(85dvh-4rem)] sm:w-[90dvw] sm:max-w-xl"
            forceMount
          >
            <Dialog.Title>
              {intl.formatMessage({ id: "component.LocationDialog.title" })}
            </Dialog.Title>
            <Dialog.Description className="text-sm">
              {intl.formatMessage({
                id: "component.LocationDialog.description",
              })}
            </Dialog.Description>
            <Suspense fallback={<LoadingDots />}>
              <LocationComboBoxResponsive
                dictionary={dictionary}
                lang={lang}
                localizationDetails={localizationDetails}
              />
            </Suspense>
            <Dialog.Close asChild>
              <Button
                aria-label={intl.formatMessage({
                  id: "component.LocationDialog.close",
                })}
                className="absolute right-6 top-6 inline-flex"
                onClick={onClose}
                variant="ghost"
              >
                <Cross2Icon />
              </Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

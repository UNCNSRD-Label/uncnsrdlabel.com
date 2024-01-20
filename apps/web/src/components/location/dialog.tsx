"use client";

import { LoadingDots } from "@/components/loading/dots";
import { LocationForm } from "@/components/location/form";
import { createIntl } from "@formatjs/intl";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useTimeoutEffect } from "@react-hookz/web";
import { Button } from "@uncnsrdlabel/components/ui/button";
import { COOKIE_LOCATION } from "@uncnsrdlabel/lib";
import { hasCookie } from "cookies-next";
import { Suspense, Usable, use, useState } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import { useTrack } from "use-analytics";
import { LocationButton } from "./button";

export function LocationDialog({
  className,
  dictionary,
  lang,
}: {
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
    hasCookie(COOKIE_LOCATION) ? undefined : 10_000,
  );

  const acceptSelectedLocations = () => {
    setOpen(false);

    console.info("Granting selected locations");
  };

  const acceptAllLocations = () => {
    setOpen(false);

    console.info("Accepting all locations");
  };

  const denyAllAdditionalLocations = () => {
    setOpen(false);

    console.info("Denying all additional locations");
  };

  const manageLocations = () => {
    console.info("Manage locations");
  };

  const onClose = () => {
    track("location_close");

    setOpen(false);

    console.info("Closing dialog");
  };

  const onOpen = () => {
    setOpen(true);

    console.info("Opening dialog");
  };

  useTimeoutEffect(
    () => {
      setOpen(true);

      console.info("Opening LocationDialog toast");
    },
    hasCookie(COOKIE_LOCATION) ? undefined : 10_000,
  );

  return (
    <>
      <LocationButton
        className={className}
        dictionary={dictionary}
        lang={lang}
        onClick={onOpen}
      />
      <Dialog.Root onOpenChange={setOpen} open={open}>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-black/80" />
          <Dialog.Content
            className="data-[state=open]:animate-contentShow fixed inset-x-4 bottom-4 z-50 grid gap-4 overflow-auto rounded border bg-inherit px-8 pb-8 pt-6 sm:left-auto sm:max-h-[calc(85dvh-4rem)] sm:w-[90dvw] sm:max-w-4xl"
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
              <LocationForm
                acceptSelectedLocations={acceptSelectedLocations}
                acceptAllLocations={acceptAllLocations}
                denyAllAdditionalLocations={denyAllAdditionalLocations}
                dictionary={dictionary}
                lang={lang}
                manageLocations={manageLocations}
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

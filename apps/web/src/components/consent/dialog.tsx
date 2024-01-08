"use client";

import { ConsentForm } from "@/components/consent/form";
import { LoadingDots } from "@/components/loading/dots";
import { type GetIntlFn } from "@/lib/i18n/server";
import { state$ } from "@/lib/store";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useTimeoutEffect } from "@react-hookz/web";
import { Button } from "@uncnsrdlabel/components/ui/button";
import { COOKIE_CONSENT } from "@uncnsrdlabel/lib";
import { hasCookie } from "cookies-next";
import { Suspense, use, useState } from "react";
import { useTrack } from "use-analytics";
import { ConsentButton } from "./button";

export function ConsentDialog({ className, getIntl }: { className?: string; getIntl: GetIntlFn; }) {
  const lang = state$.lang.get();

  const intl = use(getIntl(lang, "component.ConsentDialog"));

  const [open, setOpen] = useState(false);
  const track = useTrack();

  useTimeoutEffect(
    () => {
      setOpen(true);
    },
    hasCookie(COOKIE_CONSENT) ? undefined : 10_000,
  );

  const acceptSelectedConsents = () => {
    setOpen(false);

    console.info("Granting selected consents");
  };

  const acceptAllConsents = () => {
    setOpen(false);

    console.info("Accepting all consents");
  };

  const denyAllAdditionalConsents = () => {
    setOpen(false);

    console.info("Denying all additional consents");
  };

  const manageConsents = () => {
    console.info("Manage consents");
  };

  const onClose = () => {
    track("consent_close");

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

      console.info("Opening ConsentDialog toast");
    },
    hasCookie(COOKIE_CONSENT) ? undefined : 10_000,
  );

  return (
    <>
      <ConsentButton className={className} onClick={onOpen} />
      <Dialog.Root onOpenChange={setOpen} open={open}>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-black/80" />
          <Dialog.Content
            className="data-[state=open]:animate-contentShow fixed inset-x-4 bottom-4 z-50 grid gap-4 overflow-auto rounded border bg-inherit px-8 pb-8 pt-6 sm:left-auto sm:max-h-[calc(85dvh-4rem)] sm:w-[90dvw] sm:max-w-3xl"
            forceMount
          >
            <Dialog.Title>{intl.formatMessage({ id: "title" })}</Dialog.Title>
            <Dialog.Description className="text-sm">
              {intl.formatMessage({ id: "description" })}
            </Dialog.Description>
            <Suspense fallback={<LoadingDots />}>
              <ConsentForm
                acceptSelectedConsents={acceptSelectedConsents}
                acceptAllConsents={acceptAllConsents}
                denyAllAdditionalConsents={denyAllAdditionalConsents}
                getIntl={getIntl}
                manageConsents={manageConsents}
              />
            </Suspense>
            <Dialog.Close asChild>
              <Button
                aria-label={intl.formatMessage({ id: "close" })}
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

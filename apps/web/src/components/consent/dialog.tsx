"use client";

import { ConsentForm } from "@/components/consent/form";
import { useGetIntl } from "@/lib/i18n";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useTimeoutEffect } from "@react-hookz/web";
import { COOKIE_CONSENT } from "@uncnsrdlabel/lib";
import { hasCookie } from "cookies-next";
import { useState } from "react";

export function ConsentDialog(props: { className?: string }) {
  const intl = useGetIntl("component.ConsentDialog");

  useTimeoutEffect(
    () => {
      setOpen(true);
    },
    hasCookie(COOKIE_CONSENT) ? undefined : 10_000,
  );

  const [, setOpen] = useState(false);

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
    console.info("Closing dialog");
    setOpen(false);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={props.className}>
          {intl.formatMessage({ id: "trigger" })}
        </button>
      </Dialog.Trigger>
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
          <ConsentForm
            acceptSelectedConsents={acceptSelectedConsents}
            acceptAllConsents={acceptAllConsents}
            denyAllAdditionalConsents={denyAllAdditionalConsents}
            manageConsents={manageConsents}
          />
          <Dialog.Close asChild>
            <button
              className="absolute right-6 top-6 inline-flex"
              aria-label={intl.formatMessage({ id: "close" })}
              onClick={onClose}
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

"use client";

import { ConsentForm } from "@/components/consent/form";
import { useGetIntl } from "@/lib/i18n/client";
import { state$ } from "@/lib/store";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useTimeoutEffect } from "@react-hookz/web";
import { COOKIE_CONSENT } from "@uncnsrdlabel/lib";
import { hasCookie } from "cookies-next";

export function ConsentDialog(props: { className?: string }) {
  const intl = useGetIntl("component.ConsentDialog");

  useTimeoutEffect(
    () => {
      state$.consent.open.set(true);
    },
    hasCookie(COOKIE_CONSENT) ? undefined : 10_000,
  );

  const onClose = () => {
    console.info("Closing dialog");
    state$.consent.open.set(false);
  };

  return (
    <Dialog.Root
      open={state$.consent.open.get()}
      onOpenChange={state$.consent.open.set}
      // onOpenChange={() => state$.consent.open.set(!state$.consent.open.get())}
    >
      <Dialog.Trigger>
        <button className={props.className}>
          {intl.formatMessage({ id: "trigger" })}
          {state$.consent.open.get() ? "open" : "closed"}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-black/80" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed inset-x-4 bottom-4 z-50 grid gap-4 overflow-auto rounded border bg-inherit px-8 pb-8 pt-6 sm:left-auto sm:max-h-[85dvh] sm:w-[90dvw] sm:max-w-3xl"
          forceMount
        >
          <Dialog.Title>{intl.formatMessage({ id: "title" })}</Dialog.Title>
          <Dialog.Description className="text-sm">
            {intl.formatMessage({ id: "description" })}
          </Dialog.Description>
          <ConsentForm />
          <Dialog.Close asChild>
            <button
              className="absolute right-6 top-6 inline-flex"
              aria-label="Close"
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

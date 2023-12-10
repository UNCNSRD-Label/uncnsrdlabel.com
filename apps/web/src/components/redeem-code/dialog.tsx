"use client";

import { RedeemCodeForm } from "@/components/redeem-code/form";
import { useGetIntl } from "@/lib/i18n";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useTimeoutEffect } from "@react-hookz/web";
import { COOKIE_REDEEM_CODE } from "@uncnsrdlabel/lib";
import { hasCookie } from "cookies-next";
import { useState } from "react";

export function RedeemCode(props: { className?: string }) {
  const intl = useGetIntl("component.RedeemCode");

  useTimeoutEffect(
    () => {
      setOpen(true);
    },
    hasCookie(COOKIE_REDEEM_CODE) ? undefined : 10_000,
  );

  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className={props.className}>Redeem code</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-black/80" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed inset-x-4 bottom-4 z-50 grid gap-4 overflow-auto rounded border bg-inherit px-8 pb-8 pt-6 sm:left-auto sm:max-h-[85dvh] sm:w-[90dvw] sm:max-w-3xl"
          forceMount
        >
          <Dialog.Title>Redeem code</Dialog.Title>
          <Dialog.Description className="text-sm">
            Redeem code here
          </Dialog.Description>
          <RedeemCodeForm />
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

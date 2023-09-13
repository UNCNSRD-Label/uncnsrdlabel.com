"use client";
import { useGetIntl } from "@/lib/i18n/client";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import {Form} from "@/components/location/form";
import { state$ } from "@/lib/store";
import {ConsentForm} from "@/components/consent/form";

export function LocationDialog(props: { className?: string }) {
  const intl = useGetIntl("component.LocaleDialog");
  const onClose = () => {
    // state$.langDialog.open.set(false);
  };
  return (
    <Dialog.Root
        // open={state$.langDialog.open.get()}
        // onOpenChange={state$.langDialog.open.set}
    >
      <Dialog.Trigger asChild>
        <button className={props.className} >
          {intl.formatMessage({ id: "trigger" })}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-black/80 " />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed px-8 pb-8 pt-6 z-50 fixed z-50 w-[95vw] max-w-xl rounded-lg md:w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 opacity-100 grid gap-4"
          forceMount
        >
          <Dialog.Title className="text-left">{intl.formatMessage({ id: "title" })}</Dialog.Title>
          <Form onClose={onClose} />
          <ConsentForm/>

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

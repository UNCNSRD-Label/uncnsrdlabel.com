"use client";

import { useGetIntl } from "@/lib/i18n/client";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useTimeoutEffect } from "@react-hookz/web";
import { COOKIE_CONSENT } from "@uncnsrdlabel/lib";
import { hasCookie } from "cookies-next";
import {useEffect, useState} from "react";
import {LocationSelect} from "@/components/location/select";
import {COOKIE_LANG} from "@/components/location/constants";

export function LocationDialog(props: { className?: string }) {
  const intl = useGetIntl("component.LocaleDialog");
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    console.log('NOW set to ...', open)
  }, [open])

  console.log('=========', open)
  return (
      <>
    <Dialog.Root open={open} onOpenChange={(change)=>{
      console.log('change', change)
      setOpen(change)
    }}>
      <Dialog.Trigger asChild>
        <button className={props.className} >
          Location: {intl.formatMessage({ id: "trigger" })}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-black/80 " />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed
          px-8 pb-8 pt-6
          z-50
          fixed z-50 w-[95vw]
          max-w-xl
          rounded-lg
          md:w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]
          bg-white
          focus:outline-none
          focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 opacity-100
           grid gap-4
          "
          forceMount
          align="center"
          sticky="always"
        >

          <Dialog.Title className="text-left">{intl.formatMessage({ id: "title" })}</Dialog.Title>

        <LocationSelect setOpen={(change) => {
          console.log('Select open change', change)
          setOpen(false)
        }}/>

          <Dialog.Close asChild>
            <button
              className="absolute right-6 top-6 inline-flex"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
      </>
  );
}

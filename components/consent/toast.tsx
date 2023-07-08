"use client";

import {
  acceptAllConsentSettings,
  cookieOptions,
  defaultConsentSettings,
} from "@/lib/consent";
import * as Toast from "@radix-ui/react-toast";
import { hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

import { COOKIE_CONSENT } from "@/lib/constants";

export default async function ConsentToast() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!hasCookie(COOKIE_CONSENT)) {
      setOpen(true);
    }
  }, []);

  const acceptAllConsents = () => {
    setOpen(false);
    setCookie(COOKIE_CONSENT, acceptAllConsentSettings, cookieOptions);
    gtag("consent", "update", acceptAllConsentSettings);
    console.info("Granting all consents");
  };

  const denyAllAdditionalConsents = () => {
    const newConsentSettings = defaultConsentSettings;
    setOpen(false);
    setCookie(COOKIE_CONSENT, newConsentSettings, cookieOptions);
    gtag("consent", "update", defaultConsentSettings);
    console.info("Denying all additional consents");
  };

  return (
    <Toast.Provider duration={60_000} swipeDirection="right">
      <button
        className="shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded bg-white px-[15px] text-[15px] font-medium leading-[35px] shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        onClick={() => {
          setOpen(false);
        }}
      >
        Open cookie consent toast
      </button>

      <Toast.Root
        className="data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=end]:animate-swipeOut grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-white p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="text-slate12 mb-[5px] text-[15px] font-medium [grid-area:_title]">
          Cookies
        </Toast.Title>
        <Toast.Description asChild>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Toast.Description>
        <Toast.Action
          className="[grid-area:_action]"
          asChild
          altText="Accept all"
        >
          <button
            className="bg-green2 text-green11 shadow-green7 hover:shadow-green8 focus:shadow-green8 inline-flex h-[25px] items-center justify-center rounded px-[10px] text-xs font-medium leading-[25px] shadow-[inset_0_0_0_1px] hover:shadow-[inset_0_0_0_1px] focus:shadow-[0_0_0_2px]"
            onClick={acceptAllConsents}
          >
            Accept all
          </button>
        </Toast.Action>
        <Toast.Action
          className="[grid-area:_action]"
          asChild
          altText="Deny all"
        >
          <button
            className="bg-green2 text-green11 shadow-green7 hover:shadow-green8 focus:shadow-green8 inline-flex h-[25px] items-center justify-center rounded px-[10px] text-xs font-medium leading-[25px] shadow-[inset_0_0_0_1px] hover:shadow-[inset_0_0_0_1px] focus:shadow-[0_0_0_2px]"
            onClick={denyAllAdditionalConsents}
          >
            Deny all
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </Toast.Provider>
  );
}

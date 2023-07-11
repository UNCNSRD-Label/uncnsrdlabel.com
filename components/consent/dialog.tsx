"use client";

import * as Checkbox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useTimeoutEffect } from "@react-hookz/web";
import { clsx } from "clsx";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { useState } from "react";

import {
  acceptAllConsentSettings,
  cookieOptions,
  defaultConsentSettings,
  denyAllAdditionalConsentSettings,
  types,
} from "@/lib/consent";

import { COOKIE_CONSENT } from "@/lib/constants";

export default function ConsentDialog(props: { className?: string }) {
  const [cancel, reset] = useTimeoutEffect(
    () => {
      setOpen(true);
    },
    hasCookie(COOKIE_CONSENT) ? undefined : 10_000,
  );

  const [open, setOpen] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);

  const acceptSelectedConsents = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.target as HTMLFormElement);
    const consentParams = Object.fromEntries(formData.entries());
    setCookie(COOKIE_CONSENT, consentParams, cookieOptions);
    gtag("consent", "update", consentParams);
    console.info("Granting selected consents");
    setOpen(false);
    event.preventDefault();
  };

  const acceptAllConsents = () => {
    setCookie(COOKIE_CONSENT, acceptAllConsentSettings, cookieOptions);
    gtag("consent", "update", acceptAllConsentSettings);
    console.info("Accepting all consents");
    setOpen(false);
  };

  const denyAllAdditionalConsents = () => {
    setCookie(COOKIE_CONSENT, denyAllAdditionalConsentSettings, cookieOptions);
    gtag("consent", "update", denyAllAdditionalConsentSettings);
    console.info("Denying all additional consents");
    setOpen(false);
  };

  const manageConsents = () => {
    console.info("Manage consents");
    setOptionsOpen(true);
  };

  const onClose = () => setOpen(false);

  const consentCookieData = (getCookie(COOKIE_CONSENT) as string) ?? "{}";

  const savedConsentSettings = JSON.parse(consentCookieData);

  const consentSettings = {
    ...defaultConsentSettings,
    ...savedConsentSettings,
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className={props.className}>Edit consent settings</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-black/80" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed inset-x-4 bottom-4 z-50 grid gap-4 overflow-auto rounded border bg-inherit px-8 pb-8 pt-6 sm:left-auto sm:max-h-[85dvh] sm:w-[90dvw] sm:max-w-3xl"
          forceMount
        >
          <Dialog.Title>Edit consent settings</Dialog.Title>
          <Dialog.Description className="text-sm">
            UNCNSRD uses cookies that are essential to making this site work and
            would like to use additional cookies to improve your experience on
            this site.
          </Dialog.Description>
          <form
            onSubmit={acceptSelectedConsents}
            className="flex flex-col gap-4 text-xs"
          >
            {types.map((consent, index) => (
              <fieldset
                className={clsx("grid-cols-[auto_1fr] items-center gap-4", {
                  grid: optionsOpen,
                  hidden: !optionsOpen,
                })}
                key={consent.name || index}
              >
                <Checkbox.Root
                  className="h-4 w-4 rounded border border-solid border-black/100 bg-white stroke-black"
                  defaultChecked={consentSettings[consent.name] === "granted"}
                  id={consent.name}
                  name={consent.name}
                  value="granted"
                >
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <label htmlFor={consent.name}>{consent.description}</label>
              </fieldset>
            ))}
            <div className="mt-2 grid gap-4 sm:grid-flow-col">
              <button
                className={clsx("btn btn-xs btn-outline btn-primary btn-bg", {
                  block: optionsOpen,
                  hidden: !optionsOpen,
                })}
              >
                Accept selected cookies
              </button>
              <button
                className={clsx("btn btn-xs btn-outline btn-primary btn-bg", {
                  block: !optionsOpen,
                  hidden: optionsOpen,
                })}
                onClick={manageConsents}
                type="button"
              >
                Manage cookies
              </button>
              <button
                className="btn btn-xs btn-outline btn-primary"
                onClick={acceptAllConsents}
                type="button"
              >
                Accept all cookies
              </button>
              <button
                className="btn btn-xs btn-outline btn-primary"
                onClick={denyAllAdditionalConsents}
                type="button"
              >
                Deny additional cookies
              </button>
            </div>
          </form>
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

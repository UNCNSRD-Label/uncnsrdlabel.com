"use client";

import * as Checkbox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  cookieOptions,
  defaultConsentSettings,
  denyAllAdditionalConsentSettings,
  types,
} from "lib/consent";

import { COOKIE_CONSENT } from "lib/constants";

export default async function ConsentDialog({
  className,
}: {
  className?: string;
}) {
  useEffect(() => {
    if (!hasCookie(COOKIE_CONSENT)) {
      setOpen(true);
    }
  }, []);

  const [open, setOpen] = useState(false);

  const saveConsentSettings = (formData: FormData) => {
    const consentParams = Object.fromEntries(formData.entries());
    setCookie(COOKIE_CONSENT, consentParams, cookieOptions);
    gtag("consent", "update", consentParams);
    console.info("Granting selected consents");
    setOpen(false);
  };

  const denyAllAdditionalConsents = (event) => {
    event.preventDefault();
    setOpen(false);
    setCookie(COOKIE_CONSENT, denyAllAdditionalConsentSettings, cookieOptions);
    gtag("consent", "update", denyAllAdditionalConsentSettings);
    console.info("Denying all additional consents");
  };

  const onClose = () => setOpen(false);

  const { register } = useForm({ defaultValues: defaultConsentSettings });

  const savedConsentSettings = JSON.parse(getCookie(COOKIE_CONSENT) || "");

  const consentSettings = {
    ...defaultConsentSettings,
    ...savedConsentSettings,
  };
  console.log({ consentSettings });

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className={className}>Edit consent settings</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-black/80" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-50 grid max-h-[85vh] w-[90vw] max-w-3xl translate-x-[-50%] translate-y-[-50%] gap-4 rounded border bg-inherit p-8">
          <Dialog.Title className="">Edit consent settings</Dialog.Title>
          <Dialog.Description className="text-sm">
            UNCNSRD uses some cookies that are essential to making this site
            work, and would like to use additional cookies so we can understand
            how you use the site in order to make improvements.
          </Dialog.Description>
          <form
            action={saveConsentSettings}
            className="my-4 flex flex-col gap-4 text-xs"
          >
            {types.map((consent) => (
              <fieldset className="flex items-center gap-4" key={consent.name}>
                <Checkbox.Root
                  className="flex h-4 w-4 items-center justify-center rounded bg-white stroke-black outline-none"
                  defaultChecked={consentSettings[consent.name] === "granted"}
                  id={consent.name}
                  value="granted"
                  {...register(consent.name)}
                >
                  <Checkbox.Indicator className="text-violet11">
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <label className="" htmlFor="c1">
                  {consent.description}
                </label>
              </fieldset>
            ))}
            <div className="mt-4 flex justify-end gap-4">
              <button className="btn btn-sm btn-outline btn-primary btn-bg">
                Accept selected cookies
              </button>
              <button
                className="btn btn-sm btn-outline btn-primary"
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

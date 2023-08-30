"use client";

import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@uncnsrdlabel/lib";
import { getCookie, setCookie } from "cookies-next";
import { useState } from "react";

import {
  acceptAllConsentSettings,
  cookieOptions,
  defaultConsentSettings,
  denyAllAdditionalConsentSettings,
  types,
  type ConsentSettings,
} from "@uncnsrdlabel/lib";

import { COOKIE_CONSENT } from "@uncnsrdlabel/lib";

type ConsentDialogProps = {
  className?: string;
  // eslint-disable-next-line no-unused-vars
  acceptSelectedConsents: (event: React.FormEvent<HTMLFormElement>) => void;
  acceptAllConsents: () => void;
  denyAllAdditionalConsents: () => void;
  manageConsents: () => void;
};

export function ConsentForm(props: ConsentDialogProps) {
  const [optionsOpen, setOptionsOpen] = useState(false);

  const acceptSelectedConsents = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.target as HTMLFormElement);
    const consentParams = Object.fromEntries(formData.entries());

    setCookie(COOKIE_CONSENT, consentParams, cookieOptions);
    gtag("consent", "update", consentParams);

    console.info("Granting selected consents");

    props.acceptSelectedConsents(event);

    event.preventDefault();
  };

  const acceptAllConsents = () => {
    setCookie(COOKIE_CONSENT, acceptAllConsentSettings, cookieOptions);
    gtag("consent", "update", acceptAllConsentSettings);

    console.info("Accepting all consents");

    props.acceptAllConsents();
  };

  const denyAllAdditionalConsents = () => {
    setCookie(COOKIE_CONSENT, denyAllAdditionalConsentSettings, cookieOptions);
    gtag("consent", "update", denyAllAdditionalConsentSettings);

    console.info("Denying all additional consents");

    props.denyAllAdditionalConsents();
  };

  const manageConsents = () => {
    setOptionsOpen(true);

    console.info("Manage consents");

    props.manageConsents();
  };

  const consentCookieData = (getCookie(COOKIE_CONSENT) as string) ?? "{}";

  const savedConsentSettings = JSON.parse(consentCookieData) as ConsentSettings;

  const consentSettings = {
    ...defaultConsentSettings,
    ...savedConsentSettings,
  };

  return (
    <form
      onSubmit={acceptSelectedConsents}
      className={cn("flex flex-col gap-4 text-xs", props.className)}
    >
      {types.map((consent, index) => (
        <fieldset
          className={cn("grid-cols-[auto_1fr] items-center gap-4", {
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
          className={cn("btn btn-xs btn-outline btn-primary btn-bg", {
            block: optionsOpen,
            hidden: !optionsOpen,
          })}
        >
          Accept selected cookies
        </button>
        <button
          className={cn("btn btn-xs btn-outline btn-primary btn-bg", {
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
  );
}

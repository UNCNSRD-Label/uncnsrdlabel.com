"use client";

import { type GetIntlFn } from "@/lib/i18n/server";
import { state$ } from "@/lib/store";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@uncnsrdlabel/components/ui/button";
import {
  COOKIE_CONSENT,
  acceptAllConsentSettings,
  cn,
  cookieOptions,
  defaultConsentSettings,
  denyAllAdditionalConsentSettings,
  types,
  type ConsentSettings,
} from "@uncnsrdlabel/lib";
import { getCookie, setCookie } from "cookies-next";
import { use, useState } from "react";
import { useTrack } from "use-analytics";

type ConsentDialogProps = {
  className?: string;
  // eslint-disable-next-line no-unused-vars
  acceptSelectedConsents: (event: React.FormEvent<HTMLFormElement>) => void;
  acceptAllConsents: () => void;
  denyAllAdditionalConsents: () => void;
  getIntl: GetIntlFn;
  manageConsents: () => void;
};

export function ConsentForm(props: ConsentDialogProps) {
  const lang = state$.lang.get();

  const intl = use(props.getIntl(lang, "component.ConsentForm"));

  const track = useTrack();

  const [optionsOpen, setOptionsOpen] = useState(false);

  const acceptSelectedConsents = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.target as HTMLFormElement);
    const consentParams = Object.fromEntries(formData.entries());

    setCookie(COOKIE_CONSENT, consentParams, cookieOptions);

    track("consent_accept_selected", consentParams);

    console.info("Granting selected consents");

    props.acceptSelectedConsents(event);

    event.preventDefault();
  };

  const acceptAllConsents = () => {
    setCookie(COOKIE_CONSENT, acceptAllConsentSettings, cookieOptions);

    track("consent_accept_all", acceptAllConsentSettings);

    console.info("Accepting all consents");

    props.acceptAllConsents();
  };

  const denyAllAdditionalConsents = () => {
    setCookie(COOKIE_CONSENT, denyAllAdditionalConsentSettings, cookieOptions);

    track("consent_deny_all", denyAllAdditionalConsentSettings);

    console.info("Denying all additional consents");

    props.denyAllAdditionalConsents();
  };

  const manageConsents = () => {
    setOptionsOpen(true);
    
    track("consent_manage", denyAllAdditionalConsentSettings);

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
        <Button
          className={cn({
            block: optionsOpen,
            hidden: !optionsOpen,
          })}
          size="base"
          variant="default"
        >
          {intl.formatMessage({ id: "accept" })}
        </Button>
        <Button
          className={cn({
            block: !optionsOpen,
            hidden: optionsOpen,
          })}
          onClick={manageConsents}
          type="button"
          size="base"
          variant="secondary"
        >
          {intl.formatMessage({ id: "manage" })}
        </Button>
        <Button
          onClick={acceptAllConsents}
          type="button"
          size="base"
          variant="default"
        >
          {intl.formatMessage({ id: "accept-all" })}
        </Button>
        <Button
          onClick={denyAllAdditionalConsents}
          type="button"
          size="base"
          variant="default"
        >
          {intl.formatMessage({ id: "deny-additional" })}
        </Button>
      </div>
    </form>
  );
}

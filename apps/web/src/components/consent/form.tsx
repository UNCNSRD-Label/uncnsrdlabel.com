"use client";

import { createIntl } from "@formatjs/intl";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@uncnsrdlabel/components/atoms/button";
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
import { Usable, use, useState } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import { useTrack } from "use-analytics";

type ConsentDialogProps = {
  className?: string;
  acceptSelectedConsents: (event: React.FormEvent<HTMLFormElement>) => void;
  acceptAllConsents: () => void;
  denyAllAdditionalConsents: () => void;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
  manageConsents: () => void;
};

export function ConsentForm({className, dictionary, lang, ...props}: ConsentDialogProps) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const track = useTrack();

  const [optionsOpen, setOptionsOpen] = useState(false);
  const [consentSettings, setConsentSettings] = useState(()=>{
    const consentCookieData = (getCookie(COOKIE_CONSENT) as string) ?? "{}";

    const savedConsentSettings = JSON.parse(consentCookieData) as ConsentSettings;
    return {
    ...defaultConsentSettings,
    ...savedConsentSettings,
    }
  });

  const acceptSelectedConsents = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.target as HTMLFormElement);
    const consentParams = Object.fromEntries(formData.entries());

    setCookie(COOKIE_CONSENT, consentParams, cookieOptions);

    track("consent_accept_selected", consentParams);

    console.info("Granting selected consents");
    setConsentSettings({...defaultConsentSettings, ...consentParams})
    props.acceptSelectedConsents(event);

    event.preventDefault();
  };

  const acceptAllConsents = () => {
    setCookie(COOKIE_CONSENT, acceptAllConsentSettings, cookieOptions);

    track("consent_accept_all", acceptAllConsentSettings);

    console.info("Accepting all consents");
    setConsentSettings(acceptAllConsentSettings)
    props.acceptAllConsents();
  };

  const denyAllAdditionalConsents = () => {
    setCookie(COOKIE_CONSENT, denyAllAdditionalConsentSettings, cookieOptions);

    track("consent_deny_all", denyAllAdditionalConsentSettings);

    console.info("Denying all additional consents");
    setConsentSettings(denyAllAdditionalConsentSettings)
    props.denyAllAdditionalConsents();
  };

  const manageConsents = () => {
    setOptionsOpen(true);
    
    track("consent_manage", denyAllAdditionalConsentSettings);

    console.info("Manage consents");

    props.manageConsents();
  };

  return (
    <form
      onSubmit={acceptSelectedConsents}
      className={cn("flex flex-col gap-4 text-xs", className)}
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
            checked={consentSettings[consent.name] === "granted"}
            id={consent.name}
            name={consent.name}
            value="granted"
            onCheckedChange={(isChecked)=>{
              setConsentSettings({...consentSettings, [consent.name]: isChecked? 'granted': 'denied'})
            }}
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
          size="sm"
          variant="default"
        >
          {intl.formatMessage({ id: "component.ConsentForm.accept" })}
        </Button>
        <Button
          className={cn({
            block: !optionsOpen,
            hidden: optionsOpen,
          })}
          onClick={manageConsents}
          type="button"
          size="sm"
          variant="secondary"
        >
          {intl.formatMessage({ id: "component.ConsentForm.manage" })}
        </Button>
        <Button
          onClick={acceptAllConsents}
          type="button"
          size="sm"
          variant="default"
        >
          {intl.formatMessage({ id: "component.ConsentForm.accept-all" })}
        </Button>
        <Button
          onClick={denyAllAdditionalConsents}
          type="button"
          size="sm"
          variant="default"
        >
          {intl.formatMessage({ id: "component.ConsentForm.deny-additional" })}
        </Button>
      </div>
    </form>
  );
}

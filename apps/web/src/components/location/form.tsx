"use client";

import { createIntl } from "@formatjs/intl";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from "@radix-ui/react-select";
import { Button } from "@uncnsrdlabel/components/ui/button";
import {
  COOKIE_LOCATION,
  cn,
  cookieOptions,
  types,
} from "@uncnsrdlabel/lib";
import { getCookie, setCookie } from "cookies-next";
import { Usable, use, useState } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import { useTrack } from "use-analytics";

type LocationDialogProps = {
  className?: string;
  acceptSelectedLocations: (event: React.FormEvent<HTMLFormElement>) => void;
  acceptAllLocations: () => void;
  denyAllAdditionalLocations: () => void;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
  manageLocations: () => void;
};

export function LocationForm({className, dictionary, lang, ...props}: LocationDialogProps) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const track = useTrack();

  const [optionsOpen, setOptionsOpen] = useState(false);
  const [locationSettings, setLocationSettings] = useState( ()=>{

    const locationCookieData = (getCookie(COOKIE_LOCATION) as string) ?? "{}";
    const savedLocationSettings = JSON.parse(locationCookieData) as LocationSettings;
    return {
    ...defaultLocationSettings,
    ...savedLocationSettings,
    }
  });

  const acceptSelectedLocations = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.target as HTMLFormElement);
    const locationParams = Object.fromEntries(formData.entries());

    setCookie(COOKIE_LOCATION, locationParams, cookieOptions);

    track("location_accept_selected", locationParams);

    console.info("Granting selected locations");
    setLocationSettings({...defaultLocationSettings, ...locationParams})
    props.acceptSelectedLocations(event);

    event.preventDefault();
  };

  const acceptAllLocations = () => {
    setCookie(COOKIE_LOCATION, acceptAllLocationSettings, cookieOptions);

    track("location_accept_all", acceptAllLocationSettings);

    console.info("Accepting all locations");
    setLocationSettings(acceptAllLocationSettings)
    props.acceptAllLocations();
  };

  const denyAllAdditionalLocations = () => {
    setCookie(COOKIE_LOCATION, denyAllAdditionalLocationSettings, cookieOptions);

    track("location_deny_all", denyAllAdditionalLocationSettings);

    console.info("Denying all additional locations");
    setLocationSettings(denyAllAdditionalLocationSettings)
    props.denyAllAdditionalLocations();
  };

  const manageLocations = () => {
    setOptionsOpen(true);
    
    track("location_manage", denyAllAdditionalLocationSettings);

    console.info("Manage locations");

    props.manageLocations();
  };

  return (
    <form
      onSubmit={acceptSelectedLocations}
      className={cn("flex flex-col gap-4 text-xs", className)}
    >
      {types.map((location, index) => (
        <fieldset
          className={cn("grid-cols-[auto_1fr] items-center gap-4", {
            grid: optionsOpen,
            hidden: !optionsOpen,
          })}
          key={location.name || index}
        >
          <Checkbox.Root
            className="h-4 w-4 rounded border border-solid border-black/100 bg-white stroke-black"
            defaultChecked={locationSettings[location.name] === "granted"}
            checked={locationSettings[location.name] === "granted"}
            id={location.name}
            name={location.name}
            value="granted"
            onCheckedChange={(isChecked)=>{
              setLocationSettings({...locationSettings, [location.name]: isChecked? 'granted': 'denied'})
            }}
          >
            <Checkbox.Indicator>
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor={location.name}>{location.description}</label>
        </fieldset>
      ))}
      <SelectPrimitive.Root defaultValue={langSettings} name="lang">
          <SelectPrimitive.Trigger asChild aria-label="Food">
            <button className="
              flex  items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 group radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900 radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900 radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50
              border border-black
              ">
              <SelectPrimitive.Value />
              <SelectPrimitive.Icon className="ml-2">
                <ChevronDownIcon />
              </SelectPrimitive.Icon>
            </button>
          </SelectPrimitive.Trigger>


          <SelectPrimitive.Content
              className=" w-full "
          >
            <SelectPrimitive.ScrollUpButton className="flex items-center justify-between text-gray-700  w-full ">
              <ChevronUpIcon />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="
                 p-2 rounded-lg shadow-lg  block w-full
                " asChild>
              <SelectPrimitive.Group >
                {locales.map(
                    (local, i) => {
                      return (
                          <SelectPrimitive.Item
                              key={`lang-${local.basename}-${i}`}
                              value={local.basename}
                              className={cn(
                                  "relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 bg-white font-medium focus:bg-gray-400 focus:text-white",
                                  "radix-disabled:opacity-50",
                                  "focus:outline-none select-none"
                              )}
                          >
                            <SelectPrimitive.ItemText>{intl.formatMessage({ id: `lang-${local.region}` })}</SelectPrimitive.ItemText>
                            <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                              <CheckIcon />
                            </SelectPrimitive.ItemIndicator>
                          </SelectPrimitive.Item>
                      )
                    }
                )}
              </SelectPrimitive.Group>
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
              <ChevronDownIcon />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Root>
      <div className="mt-2 grid gap-4 sm:grid-flow-col">
        <Button
          className={cn({
            block: optionsOpen,
            hidden: !optionsOpen,
          })}
          size="sm"
          variant="default"
        >
          {intl.formatMessage({ id: "component.LocationForm.accept" })}
        </Button>
        <Button
          className={cn({
            block: !optionsOpen,
            hidden: optionsOpen,
          })}
          onClick={manageLocations}
          type="button"
          size="sm"
          variant="secondary"
        >
          {intl.formatMessage({ id: "component.LocationForm.manage" })}
        </Button>
        <Button
          onClick={acceptAllLocations}
          type="button"
          size="sm"
          variant="default"
        >
          {intl.formatMessage({ id: "component.LocationForm.accept-all" })}
        </Button>
        <Button
          onClick={denyAllAdditionalLocations}
          type="button"
          size="sm"
          variant="default"
        >
          {intl.formatMessage({ id: "component.LocationForm.deny-additional" })}
        </Button>
      </div>
    </form>
  );
}
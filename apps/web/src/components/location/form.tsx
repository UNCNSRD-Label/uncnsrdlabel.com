"use client";

import React, {useEffect, useState} from 'react';
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { cn } from "@uncnsrdlabel/lib";
import {COOKIE_LANG, LOCALE_LIST} from "@/components/location/constants";
import {useGetIntl} from "@/lib/i18n/client";
import { getCookie, setCookie } from "cookies-next";
import { state$ } from "@/lib/store";


export function Form({className, onClose}: {
  className?: string;
  onClose?: ()=>void
}) {
  const intl = useGetIntl("component.LocaleDialog");

  const [locales, setLocales] = useState([]);
  const [langSettings, setLangSettings] = useState(()=>{
    const defaultLang = state$.locale.baseName.get();
    return (getCookie(COOKIE_LANG) as string) ?? defaultLang;
  })

  useEffect(()=>{
    setLocales(LOCALE_LIST)
  }, []);


  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const consentParams = Object.fromEntries(formData.entries());
    setCookie(COOKIE_LANG, consentParams.lang);
    setLangSettings(consentParams.lang as string);
  };

  return (
      <form
          onSubmit={submit}
          className={cn("flex flex-col gap-4 text-xs", className)}
      >
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
        <button
            className={cn("btn btn-xs btn-outline btn-primary btn-bg",)}
        >
          continue
        </button>
        <button
            className={cn("btn btn-xs btn-outline bg-transparent btn-bg",)}
            onClick={()=>{console.log('Canceling')}}
            type="button"
        >
          Cancel
        </button>
      </form>
  );
}


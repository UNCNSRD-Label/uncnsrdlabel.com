"use client"

import { createIntl } from "@formatjs/intl";
import { type ResultOf } from "@graphql-typed-document-node/core";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import { useMediaQuery } from "@react-hookz/web";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@uncnsrdlabel/components/atoms/command";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@uncnsrdlabel/components/atoms/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@uncnsrdlabel/components/atoms/popover";
import { getLocalizationDetailsQuery } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { useRouter } from "next/navigation";
import { Usable, use, useState } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import { useTrack } from "use-analytics";

type LocationDialogProps = {
  localizationDetails: Usable<
    ResultOf<typeof getLocalizationDetailsQuery>['localization']
  >;
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
  manageLocations: () => void;
};

type Status = {
  value: string
  label: string
}

const statuses: Status[] = [
  {
    value: "backlog",
    label: "Backlog",
  },
  {
    value: "todo",
    label: "Todo",
  },
  {
    value: "in progress",
    label: "In Progress",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "canceled",
    label: "Canceled",
  },
]

export function ComboBoxResponsive() {
  const [open, setOpen] = useState(false)
  const isMd = useMediaQuery("only screen and (min-width : 768px)");

  const [selectedStatus, setSelectedStatus] = useState<Status | null>(
    null
  )

  if (isMd) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function StatusList({
  setOpen,
  setSelectedStatus,
}: {
  setOpen: (open: boolean) => void
  setSelectedStatus: (status: Status | null) => void
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value: string) => {
                setSelectedStatus(
                  statuses.find((priority) => priority.value === value) || null
                )
                setOpen(false)
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export function LocationForm({
  localizationDetails,
  className,
  dictionary,
  lang,
}: LocationDialogProps) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const router = useRouter();

  const track = useTrack();

  const localization = use<
    ResultOf<typeof getLocalizationDetailsQuery>['localization']
  >(localizationDetails);

  const availableCountries = localization.availableCountries;

  const redirectToCountry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // track({
    //   event:"location-redirect",
    //   location: event.currentTarget.lang.value,
    // });

    router.push("/dashboard");
  };

  return (
    <form
      onSubmit={redirectToCountry}
      className={cn("flex flex-col gap-4 text-xs", className)}
    >
      <SelectPrimitive.Root name="country">
        <SelectPrimitive.Trigger asChild>
          <button className="radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900 radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900 radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50 group flex items-center justify-between border border-black px-4 py-2 text-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900">
            <SelectPrimitive.Value />
            <SelectPrimitive.Icon className="ml-2">
              <ChevronDownIcon />
            </SelectPrimitive.Icon>
          </button>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Content className="w-full">
          <SelectPrimitive.ScrollUpButton className="flex w-full items-center justify-between text-gray-700">
            <ChevronUpIcon />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport
            asChild
            className="block w-full rounded-lg p-2 shadow-lg h-[50dvh]"
          >
            <SelectPrimitive.Group>
              {availableCountries.map((availableCountry) => {
                return (
                  <SelectPrimitive.Item
                    key={availableCountry.isoCode}
                    value={availableCountry.isoCode}
                    className={cn(
                    "relative flex items-center rounded-md bg-white px-8 py-2 text-sm font-medium text-gray-700 focus:bg-gray-400 focus:text-white",
                    "radix-disabled:opacity-50",
                    "select-none focus:outline-none",
                    )}
                  >
                    <SelectPrimitive.ItemText>
                      {availableCountry.name}
                    </SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                      <CheckIcon />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                );
              })}
            </SelectPrimitive.Group>
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
            <ChevronDownIcon />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Root>
      <div className="mt-2 grid gap-4 sm:grid-flow-col">
        <Button size="sm" variant="default">
          {intl.formatMessage({ id:"component.LocationForm.accept" })}
        </Button>
      </div>
    </form>
  );
}

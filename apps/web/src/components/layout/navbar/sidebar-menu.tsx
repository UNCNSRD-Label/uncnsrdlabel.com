"use client";

import { CloseIcon } from "@/components/icons/close";
import { LogotypeIcon } from "@/components/icons/logotype";
import { MenuIcon } from "@/components/icons/menu";
import { getIntl } from "@/lib/i18n/server";
import { themeColors } from "@/lib/tailwind";
import { Dialog } from "@headlessui/react";
import { type Menu } from "@shopify/hydrogen/storefront-api-types";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import { Button } from "@uncnsrdlabel/components/ui/button";
import { cn } from "@uncnsrdlabel/lib";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { type PartialDeep } from "type-fest";
import { NavbarSearch } from "./search";

export function SidebarMenu({
  lang,
  menu,
}: {
  lang: Intl.BCP47LanguageTag;
  menu: PartialDeep<
    Menu,
    {
      recurseIntoArrays: true;
    }
  >;
}) {
  const intl = getIntl();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sidebarMenuIsOpen, setSidebarMenuIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarMenuIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarMenuIsOpen]);

  useEffect(() => {
    setSidebarMenuIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <Button
        aria-label={intl.formatMessage({ id: "component.SidebarMenu.open" })}
        className="relative"
        data-testid="open-sidebar-menu"
        onClick={() => {
          setSidebarMenuIsOpen(!sidebarMenuIsOpen);
        }}
        variant="ghost"
      >
        <MenuIcon className="h-5 icon stroke-inherit drop-shadow" />
      </Button>
      <AnimatePresence initial={false}>
        {sidebarMenuIsOpen && (
          <Dialog
            as={motion.div}
            className="dark relative z-50"
            initial="closed"
            animate="open"
            exit="closed"
            key="dialog"
            static
            open={sidebarMenuIsOpen}
            onClose={() => {
              setSidebarMenuIsOpen(false);
            }}
          >
            <motion.div
              variants={{
                open: { opacity: 1 },
                closed: { opacity: 0 },
              }}
              className="fixed inset-0 bg-black/30"
              aria-hidden="true"
            />
            <div
              className="fixed inset-y-0 start-0 flex w-full max-w-sm justify-end"
              data-testid="sidebar-menu"
            >
              <Dialog.Panel
                as={motion.div}
                variants={{
                  open: { translateX: 0 },
                  closed: { translateX: "-100%" },
                }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                className={cn("flex w-full flex-col p-6 pt-safeTop", themeColors)}
              >
                <Button
                  aria-label={intl.formatMessage({ id: "component.SidebarMenu.close" })}
                  className="mb-4"
                  data-testid="close-sidebar-menu"
                  onClick={() => {
                    setSidebarMenuIsOpen(false);
                  }}
                  variant="ghost"
                >
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                    <CloseIcon className="icon h-5 stroke-inherit drop-shadow" />
                  </div>
                </Button>

                <div className="mb-4 w-full">
                  <NavbarSearch lang={lang} />
                </div>
                {menu?.items?.length && menu?.items?.length > 0 ? (
                  <ul className="flex flex-1 flex-col gap-2">
                    {menu.items.map((item, index) => (
                      <li key={item?.title || index}>
                        <Link
                          className="rounded-lg py-1 text-sm uppercase text-inherit"
                          href={item?.url ?? "#"}
                          onClick={() => {
                            setSidebarMenuIsOpen(false);
                          }}
                        >
                          {item?.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <LogotypeIcon className="my-6 h-8 fill-inherit" />
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}

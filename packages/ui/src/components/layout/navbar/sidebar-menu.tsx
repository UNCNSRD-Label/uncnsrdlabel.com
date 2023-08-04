"use client";

import { Dialog } from "@headlessui/react";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { themeColors } from "@uncnsrdlabel/lib/effects";
import { Menu } from "@uncnsrdlabel/lib/shopify/types";
import { CloseIcon } from "@uncnsrdlabel/ui/components/icons/close";
import { LogotypeIcon } from "@uncnsrdlabel/ui/components/icons/logotype";
import { MenuIcon } from "@uncnsrdlabel/ui/components/icons/menu";
import { Search } from "./search";

export function SidebarMenu({ menu }: { menu: Menu[] }) {
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
      <button
        onClick={() => {
          setSidebarMenuIsOpen(!sidebarMenuIsOpen);
        }}
        aria-label="Open sidebar menu"
        data-testid="open-sidebar-menu"
      >
        <MenuIcon className="h-5 stroke-inherit drop-shadow" />
      </button>
      <AnimatePresence initial={false}>
        {sidebarMenuIsOpen && (
          <Dialog
            as={motion.div}
            initial="closed"
            animate="open"
            exit="closed"
            key="dialog"
            static
            open={sidebarMenuIsOpen}
            onClose={() => {
              setSidebarMenuIsOpen(false);
            }}
            className="dark relative z-50"
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
                className={clsx("flex w-full flex-col p-6", themeColors)}
              >
                <button
                  className="mb-4"
                  onClick={() => {
                    setSidebarMenuIsOpen(false);
                  }}
                  aria-label="Close sidebar menu"
                  data-testid="close-sidebar-menu"
                >
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                    <CloseIcon className="icon h-5 stroke-inherit drop-shadow" />
                  </div>
                </button>

                <div className="mb-4 w-full">
                  <Search />
                </div>
                {menu.length ? (
                  <ul className="flex flex-1 flex-col gap-2">
                    {menu.map((item: Menu, index) => (
                      <li key={item.title || index}>
                        <Link
                          href={item.path}
                          className="rounded-lg py-1 text-sm uppercase text-inherit"
                          onClick={() => {
                            setSidebarMenuIsOpen(false);
                          }}
                        >
                          {item.title}
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
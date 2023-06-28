"use client";

import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import CloseIcon from "components/icons/close";
import MenuIcon from "components/icons/menu";
import { Menu } from "lib/shopify/types";
import Search from "./search";

export default function SidebarMenu({ menu }: { menu: Menu[] }) {
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
            className="relative z-50"
          >
            <motion.div
              variants={{
                open: { opacity: 1, backdropFilter: "blur(0.5px)" },
                closed: { opacity: 0, backdropFilter: "blur(0px)" },
              }}
              className="fixed inset-0 bg-black/30"
              aria-hidden="true"
            />
            <div
              className="fixed inset-0 flex max-w-sm justify-end bg-black text-white"
              data-testid="sidebar-menu"
            >
              <Dialog.Panel
                as={motion.div}
                variants={{
                  open: { translateX: 0 },
                  closed: { translateX: "-100%" },
                }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                className="flex w-full flex-col bg-inherit pb-6"
              >
                <div className="p-6">
                  <button
                    className="mb-4"
                    onClick={() => {
                      setSidebarMenuIsOpen(false);
                    }}
                    aria-label="Close sidebar menu"
                    data-testid="close-sidebar-menu"
                  >
                    <CloseIcon className="icon h-5 stroke-inherit drop-shadow" />
                  </button>

                  <div className="mb-4 w-full">
                    <Search />
                  </div>
                  {menu.length ? (
                    <ul className="flex flex-col gap-2">
                      {menu.map((item: Menu) => (
                        <li key={item.title}>
                          <Link
                            href={item.path}
                            className="rounded-lg py-1 text-sm uppercase text-inherit transition-colors hover:text-gray-500"
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
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}

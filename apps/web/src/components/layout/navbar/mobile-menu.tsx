"use client";

import { CloseIcon } from "@/components/icons/close";
import { MenuIcon } from "@/components/icons/menu";
import { useGetIntl } from "@/lib/i18n";
import { Dialog, Transition } from "@headlessui/react";
import { type Menu } from "@shopify/hydrogen/storefront-api-types";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { NavbarSearch } from "./search";

export function MobileMenu({ menu }: { menu: Menu[] }) {
  const intl = useGetIntl("component.MobileMenu");

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label={intl.formatMessage({ id: "open" })}
        className="md:hidden"
        data-testid="open-mobile-menu"
      >
        <MenuIcon className="h-6" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
              <div className="p-4">
                <button
                  className="mb-4"
                  onClick={closeMobileMenu}
                  aria-label={intl.formatMessage({ id: "close" })}
                  data-testid="close-mobile-menu"
                >
                  <CloseIcon className="h-6" />
                </button>

                <div className="mb-4 w-full">
                  <NavbarSearch />
                </div>
                {menu?.length ? (
                  <ul className="flex flex-col">
                    {menu.map((item, index) => (
                      <li key={item.title || index}>
                        <Link
                          className="text-dark dark:text-light rounded-lg py-1 text-xl transition-colors hover:text-gray-500"
                          href={item.handle}
                          onClick={closeMobileMenu}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

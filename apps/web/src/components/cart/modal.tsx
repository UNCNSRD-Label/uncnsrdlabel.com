"use client";

import { CloseCart } from "@/components/cart/close-cart";
import { CartForm } from "@/components/cart/form";
import { OpenCart } from "@/components/cart/open-cart";
import { useGetIntl } from "@/lib/i18n";
import { themeColors } from "@/lib/tailwind";
import { ResultOf } from "@graphql-typed-document-node/core";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "@uncnsrdlabel/components/ui/button";
import { cartFragment } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { Fragment, useEffect, useRef, useState } from "react";

export function CartModal({
  cart,
}: {
  cart: ResultOf<typeof cartFragment> | null;
}) {
  const intl = useGetIntl("component.CartModal");

  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true);
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <Button
        aria-label={intl.formatMessage({ id: "open" })}
        onClick={openCart}
        variant="ghost"
      >
        <OpenCart quantity={cart?.totalQuantity} />
      </Button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="dark relative z-50">
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
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel
              className={cn(
                "pt-safeTop flex-col p-6",
                "fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[390px]",
                themeColors,
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg uppercase">
                  {intl.formatMessage({ id: "title" })}
                </h3>

                <Button
                  aria-label={intl.formatMessage({ id: "close" })}
                  onClick={closeCart}
                  variant="ghost"
                >
                  <CloseCart />
                </Button>
              </div>

              <CartForm cart={cart} closeCart={closeCart} />
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

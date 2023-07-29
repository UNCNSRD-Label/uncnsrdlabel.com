"use client";

import { themeColors } from "@/lib/effects";
import type { Cart } from "@/lib/shopify/types";
import { Dialog } from "@headlessui/react";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CloseCart from "./close-cart";
import CartForm from "./form";
import OpenCart from "./open-cart";

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    // Open cart modal when when quantity changes.
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
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={cart?.totalQuantity} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <Dialog
            as={motion.div}
            initial="closed"
            animate="open"
            exit="closed"
            key="dialog"
            static
            open={isOpen}
            onClose={closeCart}
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
              className="fixed inset-y-0 end-0 flex w-full max-w-sm justify-end"
              data-testid="cart"
            >
              <Dialog.Panel
                as={motion.div}
                variants={{
                  open: { translateX: 0 },
                  closed: { translateX: "100%" },
                }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                className={clsx("flex w-full flex-col p-6", themeColors)}
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">My Cart</p>

                  <button aria-label="Close cart" onClick={closeCart}>
                    <CloseCart />
                  </button>
                </div>

                <CartForm cart={cart} closeCart={closeCart} />
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}

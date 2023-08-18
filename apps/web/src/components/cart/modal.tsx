"use client";

import { CloseCart } from "@/components/cart/close-cart";
import { CartForm } from "@/components/cart/form";
import { OpenCart } from "@/components/cart/open-cart";
import { Dialog } from "@headlessui/react";
import type { Cart } from "@shopify/hydrogen-react/storefront-api-types";
import { themeColors } from "@uncnsrdlabel/lib/effects";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CartModal({ cart }: { cart: Cart | undefined }) {
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
                className={cn("flex w-full flex-col p-6", themeColors)}
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg uppercase">My Bag</p>

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

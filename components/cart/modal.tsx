import { Dialog } from "@headlessui/react";
import Image from "components/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import CloseIcon from "components/icons/close";
import ShoppingBagIcon from "components/icons/shopping-bag";
import Price from "components/price";
import { DEFAULT_OPTION } from "lib/constants";
import type { Cart } from "lib/shopify/types";
import { createUrl } from "lib/utils";
import DeleteItemButton from "./delete-item-button";
import EditItemQuantityButton from "./edit-item-quantity-button";

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal({
  isOpen,
  onClose,
  cart,
}: {
  isOpen: boolean;
  onClose: () => void;
  cart: Cart;
}) {
  return (
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
          onClose={onClose}
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

          <div className="fixed inset-0 flex justify-end" data-testid="cart">
            <Dialog.Panel
              as={motion.div}
              variants={{
                open: { translateX: 0 },
                closed: { translateX: "100%" },
              }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="flex w-full flex-col bg-black p-6 outline outline-white md:w-2/5 lg:w-1/3"
            >
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold">My Bag</p>
                <button
                  aria-label="Close cart"
                  onClick={onClose}
                  className="transition-colors"
                  data-testid="close-cart"
                >
                  <CloseIcon className="h-5" />
                </button>
              </div>

              {cart.lines.length === 0 ? (
                <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                  <ShoppingBagIcon className="h-8" />
                  <p className="mt-6 text-center text-xl">Your bag is empty.</p>
                </div>
              ) : null}
              {cart.lines.length !== 0 ? (
                <div className="flex h-full flex-col justify-between overflow-hidden">
                  <ul className="flex flex-grow flex-col gap-4 overflow-auto p-6">
                    {cart.lines.map((item, i) => {
                      const merchandiseSearchParams =
                        {} as MerchandiseSearchParams;

                      item.merchandise.selectedOptions.forEach(
                        ({ name, value }) => {
                          if (value !== DEFAULT_OPTION) {
                            merchandiseSearchParams[name.toLowerCase()] = value;
                          }
                        }
                      );

                      const merchandiseUrl = createUrl(
                        `/product/${item.merchandise.product.handle}`,
                        new URLSearchParams(merchandiseSearchParams)
                      );

                      return (
                        <li key={i} data-testid="cart-item">
                          <Link
                            className="flex flex-row space-x-4 py-4"
                            href={merchandiseUrl}
                            onClick={onClose}
                          >
                            <div className="loading relative aspect-3/4 w-16 cursor-pointer overflow-hidden">
                              <Image
                                className="h-full w-full object-cover"
                                fill
                                alt={
                                  item.merchandise.product.featuredImage
                                    .altText || item.merchandise.product.title
                                }
                                src={item.merchandise.product.featuredImage.url}
                              />
                            </div>
                            <div className="flex flex-1 flex-col text-base">
                              <span className="font-semibold">
                                {item.merchandise.product.title}
                              </span>
                              {item.merchandise.title !== DEFAULT_OPTION ? (
                                <p
                                  className="text-sm"
                                  data-testid="cart-product-variant"
                                >
                                  {item.merchandise.title}
                                </p>
                              ) : null}
                            </div>
                            <Price
                              className="flex flex-col justify-between space-y-2 text-sm"
                              amount={item.cost.totalAmount.amount}
                              currencyCode={item.cost.totalAmount.currencyCode}
                            />
                          </Link>
                          <div className="flex h-9 flex-row">
                            <DeleteItemButton item={item} />
                            <p className="ml-2 flex w-full items-center justify-center border dark:border-gray-700">
                              <span className="w-full px-2">
                                {item.quantity}
                              </span>
                            </p>
                            <EditItemQuantityButton item={item} type="minus" />
                            <EditItemQuantityButton item={item} type="plus" />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="my-4 border-t pt-2 text-sm">
                    <div className="mb-2 flex items-center justify-between">
                      <p>Subtotal</p>
                      <Price
                        className="text-right"
                        amount={cart.cost.subtotalAmount.amount}
                        currencyCode={cart.cost.subtotalAmount.currencyCode}
                      />
                    </div>
                    <div className="mb-2 flex items-center justify-between">
                      <p>Taxes</p>
                      <Price
                        className="text-right"
                        amount={cart.cost.totalTaxAmount.amount}
                        currencyCode={cart.cost.totalTaxAmount.currencyCode}
                      />
                    </div>
                    <div className="mb-2 flex items-center justify-between border-b border-gray-200 pb-2">
                      <p>Shipping</p>
                      <p className="text-right">Calculated at checkout</p>
                    </div>
                    <div className="mb-2 flex items-center justify-between font-bold">
                      <p>Total</p>
                      <Price
                        className="text-right"
                        amount={cart.cost.totalAmount.amount}
                        currencyCode={cart.cost.totalAmount.currencyCode}
                      />
                    </div>
                  </div>
                  <a
                    href={cart.checkoutUrl}
                    className="flex w-full items-center justify-center bg-black p-3 text-sm font-medium uppercase text-light opacity-90 hover:opacity-100 dark:bg-white dark:text-dark"
                  >
                    <span>Proceed to Checkout</span>
                  </a>
                </div>
              ) : null}
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
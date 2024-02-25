"use client";

import { CloseCart } from "@/components/cart/close-cart";
import { CartForm } from "@/components/cart/form";
import { OpenCart } from "@/components/cart/open-cart";
import { themeColors } from "@/lib/tailwind";
import { createIntl } from "@formatjs/intl";
import { Dialog, Transition } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import {
  CartFragment,
  cartFragment,
  getCartQuery,
  getFragmentData,
  getShopifyGraphQL,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn, getQueryKey } from "@uncnsrdlabel/lib";
import { getCookie } from "cookies-next";
import {
  Fragment,
  Usable,
  use,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { type ResolvedIntlConfig } from "react-intl";
import { useTrack } from "use-analytics";

export function Cart({
  dictionary,
  lang,
}: {
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const {
    data: cartCookieData = "{}",
  } = useQuery({
    queryKey: ['cart'],
    queryFn: () => getCookie("cart") ?? "{}",
    refetchInterval: 5_000,
  });

  const cartCookie = JSON.parse(cartCookieData as string) as CartFragment;

  const variables = { cartId: cartCookie?.id };

  const queryKey = getQueryKey(getCartQuery, variables);

  const {
    data = {
      cart: null,
    },
  } = useQuery({
    enabled: !!cartCookie?.id,
    queryKey,
    queryFn: () => getShopifyGraphQL(getCartQuery, variables),
    staleTime: 5 * 1000,
  });

  const { cart: cartFragmentRef } = data;

  const cart = getFragmentData(cartFragment, cartFragmentRef);

  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const track = useTrack();

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      // if (!isOpen) {
      //   setIsOpen(true);
      // }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  const handleClickTrack = (event: React.MouseEvent<HTMLButtonElement>) => {
    openCart();

    const { dataset } = event.currentTarget;

    track("view_cart", {
      ...dataset,
    });
  };

  return (
    <>
      <Button
        aria-label={intl.formatMessage({ id: "component.CartModal.open" })}
        onClick={useCallback(handleClickTrack, [])}
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
            leave="transition-all ease-in-out duration-200 delay-200"
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
            leave="transition-all ease-in-out duration-200 delay-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel
              className={cn(
                "fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-4 pt-[max(theme(spacing.safeTop),_theme(spacing.3))] text-black backdrop-blur-xl md:w-[420px] dark:border-neutral-700 dark:bg-black/80 dark:text-white",
                themeColors,
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg uppercase">
                  {intl.formatMessage({ id: "component.CartModal.title" })}
                </h3>

                <Button
                  aria-label={intl.formatMessage({
                    id: "component.CartModal.close",
                  })}
                  onClick={closeCart}
                  variant="ghost"
                >
                  <CloseCart />
                </Button>
              </div>
              <CartForm
                cart={cart}
                container="Cart"
                dictionary={dictionary}
                lang={lang}
              />
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

"use client";

import { AddPremiumPackaging } from "@/components/cart/add-premium-packaging";
import { DeleteItemButton } from "@/components/cart/delete-item-button";
import { EditItemQuantityButton } from "@/components/cart/edit-item-quantity-button";
import { Price } from "@/components/price";
import { state$ } from "@/lib/store";
import { createIntl } from "@formatjs/intl";
import { ResultOf } from "@graphql-typed-document-node/core";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useSelector } from "@legendapp/state/react";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import { Button } from "@uncnsrdlabel/components/ui/button";
import {
  cartFragment,
  getFragmentData,
  imageFragment,
  productBasicFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { DEFAULT_OPTION, cn, createUrl } from "@uncnsrdlabel/lib";
import Image from "next/image";
import { Suspense, Usable, use } from "react";
import { SlBag } from "react-icons/sl";
import { type ResolvedIntlConfig } from "react-intl";
import { useTrack } from "use-analytics";

type MerchandiseSearchParams = {
  [key: string]: string;
};

export async function CartForm({
  cart,
  cartId,
  container,
  getDictionary,
}: {
  cart?: ResultOf<typeof cartFragment> | null;
  cartId: string;
  container?: string;
  getDictionary: Usable<ResolvedIntlConfig["messages"]>;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(getDictionary);

  const locale = useSelector<string>(() => state$.lang.get());

  const intl = createIntl({
    locale,
    messages,
  });
  
  const track = useTrack();

  const handleClickTrack = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const { dataset } = event.currentTarget;

    track("begin_checkout", {
      ...dataset,
      container,
    });
  };

  const lines = cart?.lines.edges.map((edge) => edge?.node);

  return (
    <>
      {!cart || lines?.length === 0 ? (
        <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
          <SlBag className="icon fill h-8 w-8" />
          <p className="mt-6 text-center text-sm">
            {intl.formatMessage({ id: "component.CartForm.empty-cart" })}
          </p>
        </div>
      ) : (
        <div className="flex h-full flex-col justify-between overflow-hidden p-1">
          <ul className="flex-grow overflow-auto py-4">
            {lines?.map((item, i) => {
              const merchandiseSearchParams = {} as MerchandiseSearchParams;

              item.merchandise.selectedOptions.forEach(({ name, value }) => {
                if (value !== DEFAULT_OPTION) {
                  merchandiseSearchParams[name.toLowerCase()] = value;
                }
              });

              const productBasicFragmentRef = item.merchandise.product;

              const product = getFragmentData(
                productBasicFragment,
                productBasicFragmentRef,
              );

              const featuredImage = getFragmentData(
                imageFragment,
                product.featuredImage,
              );

              const merchandiseUrl = createUrl(
                `/products/${product.handle}`,
                new URLSearchParams(merchandiseSearchParams),
              );

              const editItemQuantityButtonclassName = cn(
                "ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80",
              );

              return (
                <li
                  key={i}
                  className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                >
                  <div className="relative flex w-full flex-row justify-between px-1 py-4 items-end">
                    <div className="absolute z-40 -mt-2 ml-[55px] self-start">
                      <DeleteItemButton cartId={cartId} getDictionary={getDictionary} item={item} />
                    </div>
                    <Link
                      className="z-30 flex flex-row space-x-4 mb-3"
                      href={merchandiseUrl}
                    >
                      <figure className="aspect-2/3 relative w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                        {featuredImage?.url && (
                          <Image
                            alt={featuredImage?.altText || product.title}
                            className="h-full w-full object-cover"
                            height={128}
                            src={featuredImage?.url}
                            width={196}
                          />
                        )}
                      </figure>

                      <div className="flex flex-1 flex-col gap-4 text-sm">
                        <span className="leading-tight">{product.title}</span>
                        {item.merchandise.title !== DEFAULT_OPTION ? (
                          <span className="text-sm text-neutral-500 dark:text-neutral-400">
                            {item.merchandise.title}
                          </span>
                        ) : null}
                        <Price
                          className="text-xs"
                          amount={item.cost.totalAmount.amount}
                          currencyCode={item.cost.totalAmount.currencyCode}
                        />
                      </div>
                    </Link>
                    <div className="flex flex-col justify-between">
                      <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                        <Suspense fallback={<Button aria-disabled={true} className={editItemQuantityButtonclassName} disabled variant="ghost"><MinusIcon className="h-4 w-4 dark:text-neutral-500" /></Button>}>
                          <EditItemQuantityButton
                            cartId={cartId}
                            className={editItemQuantityButtonclassName}
                            getDictionary={getDictionary}
                            item={item}
                            type="minus"
                          />
                        </Suspense>
                        {/* TODO: Set <span aria-live="polite" className="sr-only" role="status"> for changed quantity */}
                        <p className="w-6 text-center ">
                          <span className="w-full text-sm">
                            {item.quantity}
                          </span>
                        </p>
                        <Suspense fallback={<Button aria-disabled={true} className={editItemQuantityButtonclassName} disabled variant="ghost"><PlusIcon className="h-4 w-4 dark:text-neutral-500" /></Button>}>
                          <EditItemQuantityButton
                            cartId={cartId}
                            className={editItemQuantityButtonclassName}
                            getDictionary={getDictionary}
                            item={item}
                            type="plus"
                          />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="my-4 flex flex-col">
            <AddPremiumPackaging />
          </div>

          <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
            {cart.cost.totalTaxAmount && (
              <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                <p className="uppercase">Taxes</p>
                <Price
                  className="text-right text-base text-black dark:text-white"
                  amount={cart.cost.totalTaxAmount.amount}
                  currencyCode={cart.cost.totalTaxAmount.currencyCode}
                />
              </div>
            )}
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
              <p className="uppercase">Shipping</p>
              <p className="text-right">Calculated at checkout</p>
            </div>
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
              <p className="uppercase">Total</p>
              <Price
                className="text-right text-base text-black dark:text-white"
                amount={cart.cost.totalAmount.amount}
                currencyCode={cart.cost.totalAmount.currencyCode}
              />
            </div>
          </div>
          <a
            href={cart.checkoutUrl}
            className="text-light dark:text-dark flex w-full items-center justify-center bg-black p-3 text-sm font-medium uppercase opacity-90 hover:opacity-100 dark:bg-white"
            onClick={handleClickTrack}
          >
            {intl.formatMessage({ id: "component.CartForm.proceed-to-checkout" })}
          </a>
        </div>
      )}
    </>
  );
}

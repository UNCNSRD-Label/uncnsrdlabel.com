"use client";

import { AddPremiumPackaging } from "@/components/cart/add-premium-packaging";
import { DeleteItemButton } from "@/components/cart/delete-item-button";
import { EditItemQuantityButton } from "@/components/cart/edit-item-quantity-button";
import { Price } from "@/components/price";
import { createIntl } from "@formatjs/intl";
import { ResultOf } from "@graphql-typed-document-node/core";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import { Link } from "@uncnsrdlabel/components/atoms/link";
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

export function CartForm({
  cart,
  container,
  dictionary,
  lang,
}: {
  cart?: ResultOf<typeof cartFragment> | null;
  container?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Navigator['language'];
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const track = useTrack();

  const handleClickTrack = () => {
    track("begin_checkout", {
      container,
    });
  };

  const lines = cart?.lines?.edges.map((edge) => edge?.node);

  return (
    <>
      {!cart || lines?.length === 0 ? (
        <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
          <SlBag className="icon fill h-8 w-8" />
          <span className="mt-6 text-center text-sm">
            {intl.formatMessage({ id: "component.CartForm.empty-cart" })}
          </span>
        </div>
      ) : (
        <div className="flex h-full flex-col justify-between overflow-hidden">
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

              const sellingPlanGroupNodes =
                product.sellingPlanGroups?.edges?.map((edge) => edge.node);

              const preOrder = sellingPlanGroupNodes.find(
                ({ name }) => name === "Pre-order",
              );

              return (
                <li
                  key={i}
                  className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                >
                  <div className="relative flex gap-4 w-full flex-row justify-between px-1 py-4">
                    <div className="absolute -mt-2 ml-[55px] self-start">
                      <DeleteItemButton
                        cartId={cart.id}
                        dictionary={dictionary}
                        item={item}
                        lang={lang}
                      />
                    </div>
                    <Link
                      className="flex flex-row space-x-4"
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

                      <div className="flex flex-1 flex-col gap-4 text-sm justify-between">
                        <div className="flex flex-col gap-2">
                          <span className="leading-tight">{product.title}</span>
                          {item.merchandise.title !== DEFAULT_OPTION ? (
                            <span className="text-xs">
                              {item.merchandise.title}
                            </span>
                          ) : null}
                        </div>
                        <Price
                          amount={item.cost.totalAmount.amount}
                          className="text-xs"
                          currencyCode={item.cost.totalAmount.currencyCode}
                          lang={lang}
                        />
                      </div>
                    </Link>
                    <div className="flex flex-col justify-between">
                      <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                        <Suspense
                          fallback={
                            <Button
                              aria-disabled={true}
                              className={editItemQuantityButtonclassName}
                              disabled
                              variant="ghost"
                            >
                              <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
                            </Button>
                          }
                        >
                          <EditItemQuantityButton
                            cartId={cart.id}
                            className={editItemQuantityButtonclassName}
                            dictionary={dictionary}
                            item={item}
                            lang={lang}
                            type="minus"
                          />
                        </Suspense>
                        {/* TODO: Set <span aria-live="polite" className="sr-only" role="status"> for changed quantity */}
                        <span className="w-6 text-center text-sm">
                          {item.quantity}
                        </span>
                        <Suspense
                          fallback={
                            <Button
                              aria-disabled={true}
                              className={editItemQuantityButtonclassName}
                              disabled
                              variant="ghost"
                            >
                              <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
                            </Button>
                          }
                        >
                          <EditItemQuantityButton
                            cartId={cart.id}
                            className={editItemQuantityButtonclassName}
                            dictionary={dictionary}
                            item={item}
                            lang={lang}
                            type="plus"
                          />
                        </Suspense>
                      </div>
                      {preOrder && (
                        <span className="text-xs text-center">
                          {preOrder.name}
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="my-4 flex flex-col border-t border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
            <AddPremiumPackaging className="grid-cols-2" lang={lang} />
          </div>

          <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
            {cart.cost.totalTaxAmount && (
              <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                <span className="uppercase">
                  {intl.formatMessage({ id: "component.CartForm.taxes" })}
                </span>
                <Price
                  amount={cart.cost.totalTaxAmount.amount}
                  className="text-right text-base text-black dark:text-white"
                  currencyCode={cart.cost.totalTaxAmount.currencyCode}
                  lang={lang}
                />
              </div>
            )}
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
              <span className="uppercase">
                {intl.formatMessage({ id: "component.CartForm.total-items" })}
              </span>
              <span className="text-right">{cart?.totalQuantity}</span>
            </div>
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
              <span className="uppercase">
                {intl.formatMessage({ id: "component.CartForm.shipping" })}
              </span>
              <span className="text-right">Calculated at checkout</span>
            </div>
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
              <span className="uppercase">
                {intl.formatMessage({ id: "component.CartForm.total-amount" })}
              </span>
              <Price
                amount={cart.cost.totalAmount.amount}
                className="text-right text-base text-black dark:text-white"
                currencyCode={cart.cost.totalAmount.currencyCode}
                lang={lang}
              />
            </div>
          </div>
          <a
            href={cart.checkoutUrl}
            className="text-light dark:text-dark flex w-full items-center justify-center bg-black p-3 text-sm font-medium uppercase opacity-90 hover:opacity-100 dark:bg-white"
            onClick={handleClickTrack}
          >
            {intl.formatMessage({
              id: "component.CartForm.proceed-to-checkout",
            })}
          </a>
        </div>
      )}
    </>
  );
}

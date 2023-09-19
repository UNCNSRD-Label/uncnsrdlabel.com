import { DeleteItemButton } from "@/components/cart/delete-item-button";
import { EditItemQuantityButton } from "@/components/cart/edit-item-quantity-button";
import { Price } from "@/components/price";
import { ResultOf } from '@graphql-typed-document-node/core';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import {
  cartFragment,
  getFragmentData,
  imageFragment,
  productBasicFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { DEFAULT_OPTION, createUrl } from "@uncnsrdlabel/lib";
import Image from "next/image";
import Link from "next/link";

type MerchandiseSearchParams = {
  [key: string]: string;
};

export async function CartForm({
  cart,
  closeCart,
}: {
  cart: ResultOf<typeof cartFragment> | null;
  closeCart: () => void;
}) {
  const lines = cart?.lines.edges.map((edge) => edge?.node);

  return (
    <>
      {!cart || lines?.length === 0 ? (
        <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
          <ShoppingCartIcon className="h-16" />
          <p className="mt-6 text-center text-2xl font-bold">
            Your cart is empty.
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

              const product = getFragmentData(
                productBasicFragment,
                item.merchandise.product,
              );

              const featuredImage = getFragmentData(imageFragment, product.featuredImage);

              const merchandiseUrl = createUrl(
                `/product/${product.handle}`,
                new URLSearchParams(merchandiseSearchParams),
              );

              return (
                <li
                  key={i}
                  className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                >
                  <div className="relative flex w-full flex-row justify-between px-1 py-4">
                    <div className="absolute z-40 -mt-2 ml-[55px]">
                      <DeleteItemButton item={item} />
                    </div>
                    <Link
                      href={merchandiseUrl}
                      onClick={closeCart}
                      className="z-30 flex flex-row space-x-4"
                    >
                      <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                        {featuredImage?.url && <Image
                          className="h-full w-full object-cover "
                          width={64}
                          height={64}
                          alt={
                            featuredImage?.altText ||
                            product.title
                          }
                          src={featuredImage?.url}
                        />}
                      </div>

                      <div className="flex flex-1 flex-col text-base">
                        <span className="leading-tight">
                          {product.title}
                        </span>
                        {item.merchandise.title !== DEFAULT_OPTION ? (
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            {item.merchandise.title}
                          </p>
                        ) : null}
                      </div>
                    </Link>
                    <div className="flex h-16 flex-col justify-between">
                      <Price
                        className="flex justify-end space-y-2 text-right text-sm"
                        amount={item.cost.totalAmount.amount}
                        currencyCode={item.cost.totalAmount.currencyCode}
                      />
                      <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                        <EditItemQuantityButton item={item} type="minus" />
                        <p className="w-6 text-center ">
                          <span className="w-full text-sm">
                            {item.quantity}
                          </span>
                        </p>
                        <EditItemQuantityButton item={item} type="plus" />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          
          <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
            {cart.cost.totalTaxAmount && <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
              <p className="uppercase">Taxes</p>
              <Price
                className="text-right text-base text-black dark:text-white"
                amount={cart.cost.totalTaxAmount.amount}
                currencyCode={cart.cost.totalTaxAmount.currencyCode}
              />
            </div>}
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
          >
            Proceed to Checkout
          </a>
        </div>
      )}
    </>
  );
}

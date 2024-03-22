"use client";

import { createIntl } from "@formatjs/intl";
import { type ResultOf } from "@graphql-typed-document-node/core";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useDebouncedEffect } from "@react-hookz/web";
import { parseGid } from "@shopify/hydrogen";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
    customerFragment,
    getFragmentData,
    mailingAddressFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { Usable, use } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { type ResolvedIntlConfig } from "react-intl";
import { toast } from "sonner";
import { deleteAddressAction, setDefaultAddressAction } from "./action";

export function AddressSummary({
  className,
  customer,
  dictionary,
  lang,
  mailingAddress,
  queryKey,
}: {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Navigator['language'];
  customer: ResultOf<typeof customerFragment>;
  mailingAddress: ResultOf<typeof mailingAddressFragment>;
  queryKey: any;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const shopifyQueryClient = useQueryClient();

  const { pending } = useFormStatus();

  const [deleteAddressState, deleteAddress] = useFormState(
    deleteAddressAction,
    null,
  );
  const [setDefaultAddressState, setDefaultAddress] = useFormState(
    setDefaultAddressAction,
    null,
  );

  const deleteAddressHasError =
    (deleteAddressState && deleteAddressState.status > 299) ?? false;
  const setDefaultAddressHasError =
    (setDefaultAddressState && setDefaultAddressState.status > 299) ?? false;

  useDebouncedEffect(
    () => {
      if (deleteAddressHasError) {
        toast.error(
          intl.formatMessage({
            id: "component.AccountEditForm.toast.error",
          }),
          {
            description: intl.formatMessage({
              id: deleteAddressState?.messageKey,
            }),
          },
        );
      }
    },
    [deleteAddressHasError, deleteAddressState?.messageKey],
    200,
    500,
  );

  useDebouncedEffect(
    () => {
      if (deleteAddressState?.ok) {
        shopifyQueryClient.invalidateQueries({
          queryKey,
        });

        toast.success(
          intl.formatMessage({
            id: "component.AccountEditForm.toast.success",
          }),
          {
            description: intl.formatMessage({
              id: deleteAddressState?.messageKey,
            }),
          },
        );
      }
    },
    [deleteAddressState?.ok],
    200,
    500,
  );

  useDebouncedEffect(
    () => {
      if (setDefaultAddressHasError) {
        toast.error(
          intl.formatMessage({
            id: "component.AccountEditForm.toast.error",
          }),
          {
            description: intl.formatMessage({
              id: setDefaultAddressState?.messageKey,
            }),
          },
        );
      }
    },
    [setDefaultAddressHasError, setDefaultAddressState?.messageKey],
    200,
    500,
  );

  useDebouncedEffect(
    () => {
      if (setDefaultAddressState?.ok) {
        shopifyQueryClient.invalidateQueries({
          queryKey,
        });

        toast.success(
          intl.formatMessage({
            id: "component.AccountEditForm.toast.success",
          }),
          {
            description: intl.formatMessage({
              id: setDefaultAddressState?.messageKey,
            }),
          },
        );
      }
    },
    [setDefaultAddressState?.ok],
    200,
    500,
  );

  const defaultAddress = customer?.defaultAddress
    ? getFragmentData(mailingAddressFragment, customer.defaultAddress)
    : null;

  const mailingAddressId = mailingAddress.id.split("?").shift();

  const { id } = parseGid(mailingAddressId);

  return (
    <article className={className}>
      <form className="grid gap-4">
        <header className="flex justify-between gap-4 border-b pb-8">
          <h2 className="mb-4 text-xl">{mailingAddress.name}</h2>
          <div>
            <span className="text-base text-gray-500">
              {mailingAddress.formattedArea}
            </span>
          </div>
        </header>
        <section className="grid justify-between gap-x-4 border-b pb-8 sm:grid-cols-[2fr_1fr] content-start pt-4">
          <address className="text-sm">
            <ul>
              {mailingAddress.formatted.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </address>
          {mailingAddress?.id === defaultAddress?.id && (
            <span className="content-center justify-self-end flex gap-2"><CheckCircleIcon className="stroke-hotPink h-5 w-5" /> Default</span>
          )}
        </section>

        <footer className="grid grid-flow-col justify-end gap-4">
          <Button
            formAction={setDefaultAddress}
            className={cn("flex gap-2 text-sm", {
              "underline decoration-hotPink": mailingAddress?.id === defaultAddress?.id,
            })}
            variant="link"
            value="setDefault"
            disabled={pending}
            aria-description={`Set ${mailingAddress.formatted} as default address`}
          >
            {mailingAddress?.id === defaultAddress?.id && (
              <CheckCircleIcon className="stroke-hotPink h-5 w-5" />
            )}
            {intl.formatMessage({
              id: "component.Addresses.actions.setDefaultAddress",
            })}
          </Button>
          <Link
            aria-description={`Update ${mailingAddress}`}
            className="text-sm"
            href={`/account/addresses/${id}/update`}
          >
            {intl.formatMessage({
              id: "component.Addresses.actions.updateAddress",
            })}
          </Link>
          <Button
            formAction={deleteAddress}
            className="text-sm"
            variant="link"
            value="delete"
            disabled={pending}
            aria-description={`Delete ${mailingAddress.formatted}`}
          >
            {intl.formatMessage({
              id: "component.Addresses.actions.deleteAddress",
            })}
          </Button>
        </footer>
        <input type="hidden" name="id" value={mailingAddress.id} />
      </form>
    </article>
  );
}

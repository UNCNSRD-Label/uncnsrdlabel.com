"use client";

import { createIntl } from "@formatjs/intl";
import { useDebouncedEffect } from "@react-hookz/web";
import { getShopifyCookies } from "@shopify/hydrogen-react";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import { Input } from "@uncnsrdlabel/components/atoms/input";
import { Label } from "@uncnsrdlabel/components/atoms/label";
import { cn } from "@uncnsrdlabel/lib";
import Link from "next/link";
import { Usable, use } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { type ResolvedIntlConfig } from "react-intl";
import { toast } from "sonner";
import { signUpForAccountAction } from "./action";

function Submit({
  className,
  dictionary,
  lang,
}: {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const { pending } = useFormStatus();

  return (
    <Button className={className} disabled={pending} variant="default">
      {intl.formatMessage({
        id: "component.SignUpForAccountForm.submit",
      })}
    </Button>
  );
}

export function SignUpForAccountForm({
  className,
  dictionary,
  lang,
  setActiveTab,
}: {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
  setActiveTab?: (value: string) => void;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const [state, signUpForAccount] = useFormState(signUpForAccountAction, null);

  const hasError = (state && state.status > 299) ?? false;

  useDebouncedEffect(
    () => {
      if (hasError) {
        toast.error(
          intl.formatMessage({
            id: "component.SignUpForAccountForm.toast.error",
          }),
          {
            description: intl.formatMessage({ id: state?.messageKey }),
          },
        );
      }
    },
    [hasError, state?.messageKey],
    200,
    500,
  );

  useDebouncedEffect(
    () => {
      if (state?.ok) {
        toast.success(
          intl.formatMessage({
            id: "component.SignUpForAccountForm.toast.success",
          }),
          {
            description: intl.formatMessage({ id: state?.messageKey }),
          },
        );
      }
    },
    [state?.ok],
    200,
    500,
  );

  let _shopify_y = undefined;

  if (typeof window !== "undefined") {
    const shopifyCookies = getShopifyCookies(document.cookie);

    _shopify_y = shopifyCookies._shopify_y;
  }

  return (
    <form action={signUpForAccount} className={cn("grid gap-4", className)}>
      <div>
        <Label htmlFor="email">
          {intl.formatMessage({
            id: "component.SignUpForAccountForm.email",
          })}
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="me@example.com"
          required
          type="email"
        />
      </div>
      <div>
        <Label htmlFor="password">
          {intl.formatMessage({
            id: "component.SignUpForAccountForm.password",
          })}
        </Label>
        <Input
          autoComplete="new-password"
          id="password"
          name="password"
          required
          type="password"
        />
      </div>
      <div>
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input
          autoComplete="new-password"
          id="confirm-password"
          name="confirm-password"
          required
          type="password"
        />
      </div>
      <Submit className="mt-4 w-full" dictionary={dictionary} lang={lang} />
      <div className="flex justify-center gap-2 text-sm">
        <span>Already have an account?</span>
        {setActiveTab ? (
          <Button onClick={() => setActiveTab("sign-in")} variant="link">
            Sign in
          </Button>
        ) : (
          <Link className="underline" href="/account/sign-in">
            Sign in
          </Link>
        )}
      </div>
      <input type="hidden" name="_shopify_y" value={_shopify_y} />
    </form>
  );
}

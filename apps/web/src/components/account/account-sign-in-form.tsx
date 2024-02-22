"use client";

import { createIntl } from "@formatjs/intl";
import { useDebouncedEffect } from "@react-hookz/web";
import { getShopifyCookies } from "@shopify/hydrogen-react";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import { Checkbox } from "@uncnsrdlabel/components/atoms/checkbox";
import { Input } from "@uncnsrdlabel/components/atoms/input";
import { Label } from "@uncnsrdlabel/components/atoms/label";
import { cn } from "@uncnsrdlabel/lib";
import Link from "next/link";
import { Usable, use } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { type ResolvedIntlConfig } from "react-intl";
import { toast } from "sonner";
import { signInToAccountAction } from "./action";

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
        id: "component.SignInToAccountForm.submit",
      })}
    </Button>
  );
}

export function SignInToAccountForm({
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

  const [state, signInToAccount] = useFormState(signInToAccountAction, null);

  const hasError = (state && state.status > 299) ?? false;

  useDebouncedEffect(
    () => {
      if (hasError) {
        toast.error(
          intl.formatMessage({
            id: "component.SignInToAccountForm.toast.error",
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
            id: "component.SignInToAccountForm.toast.success",
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
    <form action={signInToAccount} className={cn("grid gap-4", className)}>
      <h2 className="text-xl">Sign in to your account</h2>
      <div>
        <Label htmlFor="email">
          {intl.formatMessage({
            id: "component.SignInToAccountForm.email",
          })}
        </Label>
        <Input
          id="email"
          placeholder="me@example.com"
          type="email"
          name="email"
        />
      </div>
      <div>
        <Label htmlFor="password">
          {intl.formatMessage({
            id: "component.SignInToAccountForm.password",
          })}
        </Label>
        <Input
          id="password"
          type="password"
          name="password"
          autoComplete="current-password"
        />
      </div>
      <div>
        <Checkbox id="remember" />
        <Label className="ml-2" htmlFor="remember">
          Remember me
        </Label>
      </div>
      <Submit className="mt-4 w-full" dictionary={dictionary} lang={lang} />
      <div className="flex gap-2 justify-center text-sm">
      <span>Don't have an account?</span>
        {setActiveTab ? (
          <Button onClick={() => setActiveTab("sign-up")} variant="link">Sign up</Button>
        ) : (
          <Link className="underline" href="/account/sign-up">
            Sign up
          </Link>
        )}
      </div>
      <div className="flex justify-center text-sm">
        <Link className="underline" href="#">
          Forgot your password?
        </Link>
      </div>
      <input type="hidden" name="_shopify_y" value={_shopify_y} />
    </form>
  );
}

"use client";

import { createIntl } from "@formatjs/intl";
import { useDebouncedEffect } from "@react-hookz/web";
import { getShopifyCookies } from "@shopify/hydrogen-react";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@uncnsrdlabel/components/atoms/card";
import { Checkbox } from "@uncnsrdlabel/components/atoms/checkbox";
import { Input } from "@uncnsrdlabel/components/atoms/input";
import { Label } from "@uncnsrdlabel/components/atoms/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
    <Button className={className} disabled={pending} size="base" variant="default">
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

  const router = useRouter();

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
        router.push("/account/profile");

        toast.success(
          intl.formatMessage({
            id: "component.SignInToAccountForm.toast.success",
          }),
          {
            description: intl.formatMessage({ id: state?.messageKey }),
            // onDismiss: () => {
            //   router.push('/account/profile')
            // },
            // onAutoClose: () => {
            //   router.push('/account/profile')
            // },
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
    <Card className={className}>
      <form action={signInToAccount} className="grid gap-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">
            {intl.formatMessage({
              id: "component.SignInToAccountForm.submit",
            })}
          </CardTitle>
          <CardDescription>
            {intl.formatMessage({
              id: "component.SignInToAccountForm.description",
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <Label htmlFor="email">
              {intl.formatMessage({
                id: "component.SignInToAccountForm.field.email",
              })}
            </Label>
            <Input
              autoComplete="email"
              id="email"
              placeholder="me@example.com"
              type="email"
              name="email"
            />
          </div>
          <div>
            <Label htmlFor="password">
              {intl.formatMessage({
                id: "component.SignInToAccountForm.field.password",
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
            <Checkbox id="remember" name="remember" />
            <Label className="ml-2" htmlFor="remember">
              {intl.formatMessage({
                id: "component.SignInToAccountForm.field.rememberMe",
              })}
            </Label>
          </div>
          <Submit className="mt-4 w-full" dictionary={dictionary} lang={lang} />
          <div className="grid grid-flow-row sm:grid-flow-col justify-center gap-2 text-sm">
            <span>
              {intl.formatMessage({
                id: "component.SignInToAccountForm.action.no-account",
              })}
            </span>
            {setActiveTab ? (
              <Button className="underline" onClick={() => setActiveTab("sign-up")} variant="link">
                {intl.formatMessage({
                  id: "component.SignInToAccountForm.action.sign-up",
                })}
              </Button>
            ) : (
              <Link className="underline" href="/account/sign-up">
                {intl.formatMessage({
                  id: "component.SignInToAccountForm.action.sign-up",
                })}
              </Link>
            )}
          </div>
        </CardContent>
        <CardFooter className="grid grid-flow-row justify-center gap-2 text-sm sm:grid-flow-col">
          <Link className="underline" href="/account/recover">
            {intl.formatMessage({
              id: "component.SignInToAccountForm.action.forgot-password",
            })}
          </Link>
        </CardFooter>
        <input type="hidden" name="_shopify_y" value={_shopify_y} />
      </form>
    </Card>
  );
}

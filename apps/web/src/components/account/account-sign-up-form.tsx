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
    <Card className={className}>
      <form action={signUpForAccount} className="grid gap-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">
            {intl.formatMessage({
              id: "component.SignUpForAccountForm.submit",
            })}
          </CardTitle>
          <CardDescription>
            {intl.formatMessage({
              id: "component.SignUpForAccountForm.description",
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <Label htmlFor="email">
              {intl.formatMessage({
                id: "component.SignUpForAccountForm.field.email",
              })}
            </Label>
            <Input
              autoComplete="email"
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
                id: "component.SignUpForAccountForm.field.password",
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
            <Label htmlFor="confirmPassword">
              {intl.formatMessage({
                id: "component.SignUpForAccountForm.field.confirmPassword",
              })}
            </Label>
            <Input
              autoComplete="new-password"
              id="confirmPassword"
              name="confirmPassword"
              required
              type="password"
            />
          </div>
          <div>
            <Label htmlFor="firstName">
              {intl.formatMessage({
                id: "component.SignUpForAccountForm.field.firstName",
              })}
            </Label>
            <Input
              autoComplete="given-name"
              id="firstName"
              name="firstName"
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="lastName">
              {intl.formatMessage({
                id: "component.SignUpForAccountForm.field.lastName",
              })}
            </Label>
            <Input
              autoComplete="family-name"
              id="lastName"
              name="lastName"
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="phone">
              {intl.formatMessage({
                id: "component.SignUpForAccountForm.field.phone",
              })}
            </Label>
            <Input
              autoComplete="phone"
              id="phone"
              name="phone"
              required
              type="text"
            />
          </div>
          <div>
            <Checkbox id="acceptsMarketing" name="acceptsMarketing" />
            <Label className="ml-2" htmlFor="acceptsMarketing">
              {intl.formatMessage({
                id: "component.SignUpForAccountForm.field.acceptsMarketing",
              })}
            </Label>
          </div>
          <Submit className="mt-4 w-full" dictionary={dictionary} lang={lang} />
        </CardContent>
        <CardFooter className="flex justify-center text-sm">
          <div className="flex justify-center gap-2 text-sm">
            <span>
              {intl.formatMessage({
                id: "component.SignUpForAccountForm.action.already-have-an-account",
              })}
            </span>
            {setActiveTab ? (
              <Button onClick={() => setActiveTab("sign-in")} variant="link">
                {intl.formatMessage({
                  id: "component.SignUpForAccountForm.action.sign-in",
                })}
              </Button>
            ) : (
              <Link className="underline" href="/account/sign-in">
                {intl.formatMessage({
                  id: "component.SignUpForAccountForm.action.sign-in",
                })}
              </Link>
            )}
          </div>
        </CardFooter>
        <input type="hidden" name="_shopify_y" value={_shopify_y} />
      </form>
    </Card>
  );
}

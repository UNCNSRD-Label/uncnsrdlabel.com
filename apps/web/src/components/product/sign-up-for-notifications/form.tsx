"use client";

import { signUpAction } from "@/components/sign-up/action";
import { createIntl } from "@formatjs/intl";
import { useDebouncedEffect } from "@react-hookz/web";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import { cn } from "@uncnsrdlabel/lib";
import { Usable, use } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { SlEnvolope } from "react-icons/sl";
import { type ResolvedIntlConfig } from "react-intl";
import { toast } from "sonner";

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
    <Button className={className} disabled={pending} variant="ghost">
      {intl.formatMessage({ id: "component.SignUpForNotificationsForm.submit" })}
    </Button>
  );
}

export function SignUpForNotificationsForm({
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

  const [state, formAction] = useFormState(signUpAction, null);

  const hasError = (state && state.status > 299) ?? false;

  useDebouncedEffect(
    () => {
      if (hasError) {
        toast.error(
          intl.formatMessage({
            id: "component.SignUpForNotificationsForm.toast.error",
          }),
          {
            description: state?.message,
          },
        );
      }
    },
    [hasError, state?.message],
    200,
    500,
  );

  useDebouncedEffect(
    () => {
      if (state?.ok) {
        toast.success(
          intl.formatMessage({
            id: "component.SignUpForNotificationsForm.toast.success",
          }),
          {
            description: state?.message,
          },
        );
      }
    },
    [state?.ok],
    200,
    500,
  );

  return (
    <form action={formAction} className={cn("grid gap-4", className)}>
      <div className="field">
        <input
          aria-invalid={hasError ? "true" : "false"}
          autoComplete="on"
          className={cn(
            "w-full px-4 py-2 placeholder:text-inherit",
            {
              "border-red-500": hasError,
            },
          )}
          name="email"
          placeholder={intl.formatMessage({
            id: "component.SignUpForNotificationsForm.placeholder",
          })}
          type="email"
        />
        <Button
          aria-label={intl.formatMessage({ id: "component.SignUpForNotificationsForm.submit" })}
          className="btn absolute right-0 mr-3"
          variant="ghost"
        >
          <SlEnvolope />
        </Button>
      </div>
      <input type="hidden" name="lang" value={lang} />
      <Submit
        className="btn btn-primary btn-solid btn-sm justify-self-end !no-underline"
        dictionary={dictionary}
        lang={lang}
      />
    </form>
  );
}

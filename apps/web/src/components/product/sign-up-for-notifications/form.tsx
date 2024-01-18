"use client";

import { signUpForNotificationsAction } from "@/components/product/sign-up-for-notifications/action";
import { createIntl } from "@formatjs/intl";
import { Button } from "@uncnsrdlabel/components/ui/button";
import { cn } from "@uncnsrdlabel/lib";
import { Usable, use } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { SlEnvolope } from "react-icons/sl";
import { type ResolvedIntlConfig } from "react-intl";

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

  const status = useFormStatus();

  return (
    <Button className={className} disabled={status.pending} variant="ghost">
      {intl.formatMessage({
        id: "component.SignUpForNotificationsForm.submit",
      })}
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

  const [output, formAction] = useFormState(signUpForNotificationsAction, null);

  const hasError = (output && output.status > 299) ?? false;

  return (
    <form action={formAction} className={cn("mt-8 grid gap-4", className)}>
      <div className="field">
        <input
          aria-invalid={hasError ? "true" : "false"}
          autoComplete="on"
          className={cn(
            "w-full bg-gray-800/50 px-4 py-2 placeholder:text-inherit",
            {
              "border-red-500": hasError,
            },
          )}
          placeholder={intl.formatMessage({
            id: "component.SignUpForNotificationsForm.placeholder",
          })}
          type="email"
        />
        <Button
          aria-label={intl.formatMessage({
            id: "component.SignUpForNotificationsForm.submit",
          })}
          className="btn absolute right-0 mr-3"
          variant="ghost"
        >
          <SlEnvolope />
        </Button>
      </div>
      <Submit
        className="btn btn-primary btn-solid btn-sm justify-self-end !no-underline"
        dictionary={dictionary}
        lang={lang}
      />
      {output ? (
        <output
          className={cn("text-sm", {
            "text-red-500": hasError,
            "text-green-500": !hasError,
          })}
          role="alert"
        >
          {output.message}
        </output>
      ) : null}
    </form>
  );
}
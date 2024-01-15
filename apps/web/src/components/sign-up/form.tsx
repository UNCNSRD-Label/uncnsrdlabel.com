"use client";

import { signUpAction } from "@/components/sign-up/action";
import { state$ } from "@/lib/store";
import { createIntl } from "@formatjs/intl";
import { useSelector } from "@legendapp/state/react";
import { Button } from "@uncnsrdlabel/components/ui/button";
import { cn } from "@uncnsrdlabel/lib";
import { Usable, use } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { SlEnvolope } from "react-icons/sl";
import { type ResolvedIntlConfig } from "react-intl";

function Submit({
  className,
  getDictionary,
}: {
  className?: string;
  getDictionary: Usable<ResolvedIntlConfig["messages"]>;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(getDictionary);

  const locale = useSelector<string>(() => state$.lang.get());

  const intl = createIntl({
    locale,
    messages,
  });

  const status = useFormStatus();

  return (
    <Button className={className} disabled={status.pending} variant="ghost">
      {intl.formatMessage({ id: "component.SignUpForm.submit" })}
    </Button>
  );
}

export function SignUpForm({ className, getDictionary }: { className?: string; getDictionary: Usable<ResolvedIntlConfig["messages"]>; }) {
  const messages = use<ResolvedIntlConfig["messages"]>(getDictionary);

  const locale = useSelector<string>(() => state$.lang.get());

  const intl = createIntl({
    locale,
    messages,
  });

  const [output, formAction] = useFormState(signUpAction, null);

  const hasError = (output && output.status > 299) ?? false;

  return (
    <form action={formAction} className={cn("mt-8 grid gap-4", className)}>
      <div className="field">
        <input
          aria-invalid={hasError ? "true" : "false"}
          autoComplete="on"
          className={cn("w-full bg-gray-800/50 px-4 py-2 placeholder:text-inherit", {
            "border-red-500": hasError,
          })}
          placeholder={intl.formatMessage({ id: "component.SignUpForm.placeholder" })}
          type="email"
        />
        <Button
          aria-label={intl.formatMessage({ id: "component.SignUpForm.submit" })}
          className="btn absolute right-0 mr-3"
          variant="ghost"
        >
          <SlEnvolope />
        </Button>
      </div>
      <Submit
        className="btn btn-primary btn-solid btn-sm justify-self-end !no-underline"
        getDictionary={getDictionary}
      />
      {output ? <output className={cn("text-sm", {
        "text-red-500": hasError,
        "text-green-500": !hasError,
      })} role="alert">{output.message}</output> : null}
    </form>
  );
}

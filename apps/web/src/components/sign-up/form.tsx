"use client";

import { signUpAction } from "@/components/sign-up/action";
import { useGetIntl } from "@/lib/i18n";
import { cn } from "@uncnsrdlabel/lib";
import { useFormState, useFormStatus } from "react-dom";
import { SlEnvolope } from "react-icons/sl";

function Submit({
  className,
}: {
  className?: string;
}) {
  const intl = useGetIntl("component.SignUpForm");

  const status = useFormStatus();

  return (
    <button className={className} disabled={status.pending}>
      {intl.formatMessage({ id: "submit" })}
    </button>
  );
}

export function SignUpForm({ className }: { className?: string }) {
  const intl = useGetIntl("component.SignUpForm");

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
          placeholder={intl.formatMessage({ id: "placeholder" })}
          type="email"
        />
        <button
          aria-label={intl.formatMessage({ id: "submit" })}
          className="btn absolute right-0 mr-3"
        >
          <SlEnvolope />
        </button>
      </div>
      <Submit
        className="btn btn-primary btn-solid btn-sm justify-self-end !no-underline"
      />
      {output ? <output className={cn("text-sm", {
        "text-red-500": hasError,
        "text-green-500": !hasError,
      })} role="alert">{output.message}</output> : null}
    </form>
  );
}

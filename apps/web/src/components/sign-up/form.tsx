"use client";

import { useGetIntl } from "@/lib/i18n";
import { cn } from "@uncnsrdlabel/lib";
import { useForm } from "react-hook-form";
import { SlEnvolope } from "react-icons/sl";

export function SignUpForm({
  action,
  className,
}: {
  action: (
    formData: FormData,
    custom_source?: string,
  ) => Promise<{
    message: string;
  }>;
  className?: string;
}) {
  const intlForm = useGetIntl("component.SignUpForm");

  const {
    formState: { errors, isValid },
    register,
  } = useForm({ defaultValues: { email: "" } });

  return (
    <form action={action} className={cn("mt-8 grid gap-4", className)}>
      <div className="field">
        <input
          aria-invalid={errors.email ? "true" : "false"}
          autoComplete="on"
          className="w-full bg-gray-800/50 px-4 py-2 placeholder:text-inherit"
          placeholder={intlForm.formatMessage({ id: "placeholder" })}
          type="email"
          {...register("email", {
            required: intlForm.formatMessage({ id: "required" }),
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: intlForm.formatMessage({ id: "pattern" }),
            },
          })}
        />
        {errors.email && <p role="alert">{errors.email?.message}</p>}
        <button
          aria-label={intlForm.formatMessage({ id: "submit" })}
          className="btn absolute right-0 mr-3"
          disabled={!isValid}
        >
          <SlEnvolope />
        </button>
      </div>
      <button
        className="btn btn-primary btn-solid btn-sm justify-self-end !no-underline"
        disabled={!isValid}
      >
        {intlForm.formatMessage({ id: "submit" })}
      </button>
    </form>
  );
}

"use client";

import { redeemCodeAction } from "@/components/redeem-code/action";
import { useGetIntl } from "@/lib/i18n";
import { cn } from "@uncnsrdlabel/lib";
import { useForm } from "react-hook-form";

export function RedeemCodeForm({ className }: { className?: string }) {
  const intl = useGetIntl("component.RedeemCodeForm");

  const codeInputs: number[] = [...Array(5)];

  const defaultValues = Object.fromEntries(
    codeInputs.map((codeInput, i) => [[`code-${codeInput}-${i}`], undefined]),
  );

  const {
    formState: { errors, isValid },
    register,
  } = useForm({ defaultValues });

  return (
    <form
      action={redeemCodeAction}
      className={cn("mt-8 grid grid-flow-col gap-4 bg-black p-4", className)}
    >
      {codeInputs.map((codeInput, i) => (
        <div
          className="field aspect-square bg-white"
          key={`code-${codeInput}-${i}`}
        >
          <input
            autoComplete="on"
            className="w-full border-none outline-none placeholder:text-inherit"
            placeholder={intl.formatMessage({ id: "placeholder" })}
            type="number"
            {...register(`code-${i}`, {
              required: true,
            })}
            aria-invalid={errors[`code-${i}`] ? "true" : "false"}
          />
        </div>
      ))}

      <button
        className="btn btn-primary btn-solid btn-sm justify-self-end !no-underline"
        disabled={!isValid}
      >
        {intl.formatMessage({ id: "submit" })}
      </button>
    </form>
  );
}

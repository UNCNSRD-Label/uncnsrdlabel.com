"use client";

import { clsx } from "clsx";
import { useForm } from "react-hook-form";

import { redeemCodeAction } from "@/components/redeem-code/action";

export default function RedeemCodeForm({ className }: { className?: string }) {
  const codeInputs: number[] = [...Array(5)];

  const defaultValues = Object.fromEntries(
    codeInputs.map((codeInput, i) => [[`code-${i}`], undefined]),
  );

  const {
    formState: { errors, isValid },
    register,
  } = useForm({ defaultValues });

  return (
    <form
      action={redeemCodeAction}
      className={clsx("mt-8 grid grid-flow-col gap-4 bg-black p-4", className)}
    >
      {codeInputs.map((i) => (
        <div className="field aspect-square bg-white" key={`code-${i}`}>
          <input
            autoComplete="true"
            className="w-full border-none outline-none placeholder:text-inherit"
            placeholder="0"
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
        Sign up
      </button>
    </form>
  );
}

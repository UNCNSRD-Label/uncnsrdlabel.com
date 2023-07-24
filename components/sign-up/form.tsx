"use client";

import { clsx } from "clsx";
import { useForm } from "react-hook-form";
import { SlEnvolope } from "react-icons/sl";

import { signUpAction } from "@/components/sign-up/action";

export default function SignUpForm({ className }: { className?: string }) {
  const {
    formState: { errors, isValid },
    register,
  } = useForm({ defaultValues: { email: "" } });

  return (
    <form action={signUpAction} className={clsx("mt-8 grid gap-4", className)}>
      <div className="field">
        <input
          autoComplete="true"
          className="w-full bg-gray-800/50 px-4 py-2 placeholder:text-inherit"
          placeholder="Sign up to our newsletter"
          type="email"
          {...register("email", {
            required: "Email address is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p role="alert">{errors.email?.message}</p>}
        <button className="btn absolute right-0 mr-3" aria-label="Submit email">
          <SlEnvolope />
        </button>
      </div>
      {/* <input
      type="tel"
      name="phone_number"
      placeholder="Sign up to our newsletter"
      className="w-full px-4 py-2"
    /> */}
      <button
        className="btn btn-primary btn-solid btn-sm justify-self-end !no-underline"
        disabled={!isValid}
      >
        Sign up
      </button>
    </form>
  );
}

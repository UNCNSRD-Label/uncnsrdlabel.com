"use client";

import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { clsx } from "clsx";
import { useForm } from "react-hook-form";
import { SlEnvolope } from "react-icons/sl";

import { signUp } from "@/components/sign-up/actions";

export default function SignUp({ className }: { className?: string }) {
  const {
    formState: { errors, isValid },
    register,
  } = useForm({ defaultValues: { email: "" } });

  return (
    <section className={clsx("grid gap-4", className)}>
      <h3 className="text-sm uppercase">Sign up to our newsletter</h3>
      <span className="text-xs">
        Sign up and receive 10% off your first purchase
      </span>
      <form action={signUp} className={"mt-8 grid gap-4"}>
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
          <button className="btn absolute right-0 mr-3">
            <AccessibleIcon.Root label="Submit email">
              <SlEnvolope />
            </AccessibleIcon.Root>
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
    </section>
  );
}

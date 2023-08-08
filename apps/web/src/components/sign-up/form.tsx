"use client";

import * as Toast from "@radix-ui/react-toast";
import { clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { SlEnvolope } from "react-icons/sl";

import { signUpAction } from "@/components/sign-up/action";

import { themeColors } from "@uncnsrdlabel/lib/effects";

export function SignUpForm({ className }: { className?: string }) {
  const {
    formState: { errors, isValid },
    register,
  } = useForm({ defaultValues: { email: "" } });

  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);
  const messageRef = useRef<string | null>("");

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const action = async (formData: FormData) => {
    setOpen(true);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 5_000);

    // grab location from context
    // this.name = "Sign Up Form (Footer)";
    const response = await signUpAction(formData, "Sign Up Form (Footer)");

    messageRef.current = response;
  };

  return (
    <Toast.Provider swipeDirection="right">
      <form action={action} className={clsx("mt-8 grid gap-4", className)}>
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
          <button
            className="btn absolute right-0 mr-3"
            aria-label="Submit email"
          >
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

      <Toast.Root
        className={clsx(
          "data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=end]:animate-swipeOut grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-inherit bg-white p-[15px] text-inherit [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:transition-[transform_200ms_ease-out]",
          themeColors,
          "bg-hotPink text-white",
          "dark:bg-hotPink dark:text-white",
        )}
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="mb-2 font-medium [grid-area:_title]">
          Newsletter signup
        </Toast.Title>
        <Toast.Description asChild>
          <div className="m-0 text-sm [grid-area:_description]">
            {messageRef.current}
          </div>
        </Toast.Description>
        <Toast.Action
          className="[grid-area:_action]"
          asChild
          altText="Close this message"
        >
          <button className="">Close</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 z-50 m-0 flex w-96 max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </Toast.Provider>
  );
}

"use client";

import { signUpAction } from "@/components/sign-up/action";
import { useGetIntl } from "@/lib/i18n";
import { themeColors } from "@/lib/tailwind";
import * as Toast from "@radix-ui/react-toast";
import { cn } from "@uncnsrdlabel/lib";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { SlEnvolope } from "react-icons/sl";

export function SignUpForm({ className }: { className?: string }) {
  const intl = useGetIntl("component.SignUpForm");
  const intlToast = useGetIntl("component.SignUpForm.toast");

  const {
    formState: { errors, isValid },
    register,
  } = useForm({ defaultValues: { email: "" } });

  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);
  const [toastMessage, setToastMessage] = useState<string | null>(
    intl.formatMessage({ id: "message" }),
  );

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const action = async (formData: FormData) => {
    setOpen(true);

    window.clearTimeout(timerRef.current);

    timerRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 10_000);

    // grab location from context
    const response = await signUpAction(formData, "Sign Up Form (Footer)");

    if (response?.message) {
      setToastMessage(response.message);
    }
  };

  return (
    <Toast.Provider swipeDirection="right">
      <form action={action} className={cn("mt-8 grid gap-4", className)}>
        <div className="field">
          <input
            aria-invalid={errors.email ? "true" : "false"}
            autoComplete="on"
            className="w-full bg-gray-800/50 px-4 py-2 placeholder:text-inherit"
            placeholder={intl.formatMessage({ id: "placeholder" })}
            type="email"
            {...register("email", {
              required: intl.formatMessage({ id: "required" }),
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: intl.formatMessage({ id: "pattern" }),
              },
            })}
          />
          {errors.email && <p role="alert">{errors.email?.message}</p>}
          <button
            className="btn absolute right-0 mr-3"
            aria-label={intl.formatMessage({ id: "submit" })}
          >
            <SlEnvolope />
          </button>
        </div>
        <button
          className="btn btn-primary btn-solid btn-sm justify-self-end !no-underline"
          disabled={!isValid}
        >
          {intl.formatMessage({ id: "submit" })}
        </button>
      </form>

      <Toast.Root
        className={cn(
          "data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=end]:animate-swipeOut grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-inherit bg-white p-[15px] text-inherit [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:transition-[transform_200ms_ease-out]",
          themeColors,
          "bg-hotPink text-white",
          "dark:bg-hotPink dark:text-white",
        )}
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="mb-2 font-medium [grid-area:_title]">
          {intlToast.formatMessage({ id: "title" })}
        </Toast.Title>
        <Toast.Description asChild>
          <div className="m-0 text-sm [grid-area:_description]">
            {toastMessage}
          </div>
        </Toast.Description>
        <Toast.Action
          className="[grid-area:_action]"
          asChild
          altText={intlToast.formatMessage({ id: "close-alt" })}
        >
          <button>{intlToast.formatMessage({ id: "close-button" })}</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 z-50 m-0 flex w-96 max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </Toast.Provider>
  );
}

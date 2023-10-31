"use client";

import { cn, SITE_URL_WEB } from "@uncnsrdlabel/lib";
import { useRouter } from "next/navigation";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { checkCode } from "./actions";
import styles from "./index.module.css";

export type InputRef = HTMLInputElement;

export const Input = forwardRef<InputRef, Partial<HTMLInputElement>>(
  ({ name, placeholder }, forwardedRef) => (
    <div className="field place-item-center shadow-hotPink grid rounded-lg shadow-[0_-6px_16px_rgb(0,0,0,0.4)] transition delay-75 duration-300">
      <input
        autoComplete="true"
        className={cn(
          "aspect-3/4 font-montserrat border-hotPink shadow-hotPink grid w-8 appearance-none place-content-center rounded-lg bg-transparent p-0 text-center text-2xl leading-none text-white shadow-[0_6px_16px_rgb(0,0,0,0.4)] transition delay-75 duration-300 focus:border-transparent focus:ring-transparent md:w-24 md:text-7xl",
          styles.code,
        )}
        enterKeyHint="enter"
        maxLength={1}
        name={name}
        onInput={(e) => {
          e.currentTarget.value = e.currentTarget.value.slice(
            0,
            e.currentTarget.maxLength,
          );
        }}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          // if key value is a number, focus next input
          if (e.key.match(/\d/)) {
            const next =
              e.currentTarget.parentElement?.nextElementSibling
                ?.firstElementChild;

            if (next instanceof HTMLInputElement) {
              next.focus();
            } else {
              e.currentTarget
                ?.closest("form")
                ?.dispatchEvent(new Event("submit", { bubbles: true }));
            }
          }
        }}
        placeholder={placeholder ?? "0"}
        required
        ref={forwardedRef}
        type="number"
      />
    </div>
  ),
);

Input.displayName = "Input";

export default function Code({ className }: { className?: string }) {
  const defaultMessage = "Enter code";

  const { pending } = useFormStatus();
  const [message, setMessage] = useState<string>(defaultMessage);
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const input1Ref = useRef<HTMLInputElement>(null);
  const input4Ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input1Ref.current?.focus();
  }, []);

  input1Ref.current?.addEventListener("focusout", () => {
    setMessage(defaultMessage);
  });

  return (
    <form
      action={async (formData) => {
        const accessCodeReceived = `${formData.get("code-1")}${formData.get(
          "code-2",
        )}${formData.get("code-3")}${formData.get("code-4")}`;

        setMessage("Checking code");

        const match = await checkCode(formData);

        if (match === true) {
          setMessage("Taking you to the site");

          router.push(`${SITE_URL_WEB}?code=${accessCodeReceived}`);
        } else {
          setMessage("incorrect code");
          formRef.current?.reset();
          input1Ref.current?.focus();
        }
      }}
      className={cn(
        className,
        "align-center grid content-center items-center [&:has(input:valid)>button]:opacity-100",
      )}
      ref={formRef}
    >
      <div className="codes grid grid-flow-col gap-8">
        <Input name="code-1" ref={input1Ref} />
        <Input name="code-2" />
        <Input name="code-3" />
        <Input name="code-4" ref={input4Ref} />
      </div>
      <div className="actions grid grid-flow-col gap-2">
        <button
          className={cn(
            "btn btn-solid btn-sm col-start-3 justify-self-end opacity-0 selection:bg-white",
            pending ? "btn-pending" : "btn-normal",
          )}
          disabled={pending}
        >
          Check code
        </button>
      </div>
      {message && (
        <output className="selection:bg-white">
          <div className="text-center">{message}</div>
        </output>
      )}
    </form>
  );
}

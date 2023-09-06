"use client";

import { cn } from "@uncnsrdlabel/lib";
import { useRouter } from "next/navigation";
import { forwardRef, useEffect, useRef, useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { checkCode } from "./actions";
import styles from "./index.module.css";

export type InputRef = HTMLInputElement;

export const Input = forwardRef<InputRef, Partial<HTMLInputElement>>(
  ({ name, placeholder }, forwardedRef) => (
    <div className="field grid place-item-center shadow-[0_-6px_16px_rgb(0,0,0,0.4)] shadow-hotPink transition delay-75 duration-300 rounded-lg">
      <input
        autoComplete="true"
        className={cn(
          "bg-transparent p-0 text-center text-2xl md:text-7xl grid place-content-center aspect-3/4 w-8 md:w-24 appearance-none font-montserrat leading-none border-hotPink transition delay-75 duration-300 focus:ring-transparent focus:border-transparent shadow-[0_6px_16px_rgb(0,0,0,0.4)] shadow-hotPink rounded-lg text-white",
          styles.code
        )}
        enterKeyHint="enter"
        maxLength={1}
        name={name}
        onInput={(e) => {
          e.currentTarget.value = e.currentTarget.value.slice(
            0,
            e.currentTarget.maxLength
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
                ?.dispatchEvent(
                  new Event("submit", { bubbles: true })
                );
            }
          }
        }}
        placeholder={placeholder ?? "0"}
        required
        ref={forwardedRef}
        type="number"
      />
    </div>
  )
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
          "code-2"
        )}${formData.get("code-3")}${formData.get("code-4")}`;

        setMessage("Checking code");

        const match = await checkCode(formData);

        if (match === true) {
          setMessage("Taking you to the site");

          router.push(
            `https://www.uncnsrdlabel.com?code=${accessCodeReceived}`
          );
        } else {
          setMessage("incorrect code");
          formRef.current?.reset();
          input1Ref.current?.focus();
        }
      }}
      className={cn(
        className,
        "[&:has(input:valid)>button]:opacity-100 grid align-center content-center items-center"
      )}
      ref={formRef}
    >
      <div className="codes grid gap-8 grid-flow-col">
        <Input name="code-1" ref={input1Ref} />
        <Input name="code-2" />
        <Input name="code-3" />
        <Input name="code-4" ref={input4Ref} />
      </div>
      <div className="actions grid gap-2 grid-flow-col">
        <button
          className={cn(
            "btn btn-solid btn-sm justify-self-end opacity-0 col-start-3 selection:bg-white",
            pending ? "btn-pending" : "btn-normal"
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

"use client";

import clsx from "clsx";
import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { SlEnvolope } from "react-icons/sl";
import Image from "#/components/image";

import { signUp } from "./actions";

import styles from "./index.module.css";

export default function SignUp({ className }: { className?: string }) {
  const { pending, action, data } = useFormStatus();
  const [input, setInput] = useState<string>();

  return (
    <form
      action={signUp}
      className={clsx(
        className,
        "grid gap-4  [&:has(input:valid)>button]:opacity-100"
      )}
      // onSubmit={(e) => console.log(event?.target?.email.value)}
      onSubmit={(e) => setInput("submitted")}
    >
      <div className="field">
        <input
          autoComplete="true"
          className="w-full px-4 py-2 bg-transparent border-transparent border-white border-b-white"
          name="email"
          placeholder="Sign up to our newsletter"
          required
          type="email"
        />
        <button className="absolute right-0 mr-3" disabled={pending}>
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
        className={clsx(
          "btn btn-primary btn-solid btn-sm justify-self-end opacity-0",
          pending ? "btn-pending" : "btn-normal"
        )}
        disabled={pending}
      >
        Sign up
      </button>
      {input && (
        <output className={clsx(styles.output)}>
          <Image
            alt="Models on deckchairs"
            className={styles.image}
            fill
            priority
            src="/images/MAV07179.jpeg"
          />

          <div className={clsx(styles.container)}>
            <p style={{ justifySelf: "start" }}>Sexy not sorry&hellip;</p>
            <p style={{ justifySelf: "end" }}>Watch this space!</p>
          </div>
          <h1 className={clsx(styles.title)}>UNCNSRD</h1>
        </output>
      )}
    </form>
  );
}

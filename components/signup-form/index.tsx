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
        "grid gap-2 grid-flow-col [&:has(input:valid)>button]:opacity-100",
        styles.form
      )}
      onSubmit={(e) => setInput("submitted")}
    >
      <div className="field col-start-2">
        <input
          autoComplete="true"
          className="w-full px-4 py-2 bg-transparent border-transparent border-b-white placeholder:text-white filter drop-shadow-md text-sm sm:text-base"
          name="email"
          placeholder="Sign up to our newsletter"
          required
          type="email"
        />
        <button
          className="absolute right-0 mr-3 hidden md:block"
          disabled={pending}
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
        className={clsx(
          "btn btn-primary btn-solid btn-sm justify-self-end opacity-0 col-start-3",
          pending ? "btn-pending" : "btn-normal"
        )}
        disabled={pending}
      >
        Sign up
      </button>
      {input && (
        <output className={clsx(styles.output)}>
          <figure className={clsx(styles.figure)}>
            <Image
              alt="Models on deckchairs"
              className={styles.image}
              fill
              priority
              quality={100}
              src="/images/MAV07179.jpeg"
            />
          </figure>

          <h1 className={clsx(styles.title)}>UNCNSRD</h1>

          <div className={clsx(styles.container)}>
            <p style={{ justifySelf: "start" }}>Sexy not sorry&hellip;</p>
            <p style={{ justifySelf: "end" }}>Watch this space!</p>
          </div>
        </output>
      )}
    </form>
  );
}

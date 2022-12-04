"use client";

import { clsx } from "clsx";
import React, { useRef, FC, FormEvent, ReactNode } from "react";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  className?: ReactNode;
  theme?: "dark" | "light"
};

export const Component: FC<Props> = ({ children, className, theme = "light" }) => {
  const signupFormRef = useRef<HTMLFormElement>(null);
  const signupFormFeedbackRef = useRef<HTMLOutputElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      // @ts-ignore
      email: event?.target?.email.value,
    };

    const JSONdata = JSON.stringify(data);

    const response = await fetch("/api/signup", {
      body: JSONdata,

      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await response.json();

    console.log(result);

    if (signupFormRef.current) {
      if (result.status === 200) {
        signupFormRef.current.classList.add(styles.valid);
      } else {
        signupFormRef.current.classList.add(styles.invalid);
      }
    }

    if (signupFormFeedbackRef.current) {
      if (result.status === 200) {
        signupFormFeedbackRef.current.classList.add("valid");
        signupFormFeedbackRef.current.innerHTML = `<p>Sexy not sorry</p>
          <p>Watch this space!</p>`;
      } else {
        signupFormFeedbackRef.current.classList.add("invalid");
        signupFormFeedbackRef.current.textContent = "An error occurred";
      }
    }
  };

  return (
    <form
      className={clsx(
        className,
        theme,
        styles.form,
        "md:grid-cols-3",
        "gap-4",
        "md:gap-2"
      )}
      onSubmit={handleSubmit}
      ref={signupFormRef}
    >
      <div className={clsx("field", "md:col-span-2")}>
        <label htmlFor="email">get first hand access here</label>
        <input type="email" id="email" name="email" required />
      </div>
      <button className={clsx("button", "button__filled")}>Notify Me</button>
      <output className={clsx("output")} ref={signupFormFeedbackRef} />
    </form>
  );
};

export default Component;

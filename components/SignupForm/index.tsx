"use client";

import { clsx } from "clsx";
import React, { useRef, FC, FormEvent, ReactNode } from "react";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  className?: ReactNode;
  theme?: "dark" | "light";
};

export const Component: FC<Props> = ({
  children,
  className,
  theme = "light",
}) => {
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
        "grid",
        "grid-cols-1",
        "gap-6"
      )}
      onSubmit={handleSubmit}
      ref={signupFormRef}
    >
      <div className={clsx(styles.formControl, "form-control", "w-full")}>
        <label className={clsx(styles.label, "label")}>
          <span className="label-text">Sign up to the mailing list</span>
        </label>
        <label className="input-group w-full">
          <span>Email</span>
          <input
            type="text"
            placeholder="Your email address"
            className="input input-bordered w-full"
            required
          />
        </label>
      </div>
      <button className={clsx("btn", "btn-primary", "btn-block")}>
        Notify me
      </button>
      <output className={clsx("output")} ref={signupFormFeedbackRef} />
    </form>
  );
};

export default Component;

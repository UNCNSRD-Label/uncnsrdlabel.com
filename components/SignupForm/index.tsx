"use client";

import { clsx } from "clsx";
import React from "react";

import { useRef, FormEvent } from "react";

import styles from "./index.module.css";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Component: React.FC<Props> = ({ children, className }) => {
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
      className={clsx(className, "form", styles.form)}
      onSubmit={handleSubmit}
      ref={signupFormRef}
    >
      <div className={clsx("field", styles.field)}>
        <label className={clsx("label", styles.label)} htmlFor="email">
          get first hand access here
        </label>
        <input
          className={clsx("input", styles.input)}
          type="email"
          id="email"
          name="email"
          placeholder="get first hand access here"
          required
        />
      </div>
      <button className={clsx("button", styles.button)}>Notify Me</button>

      {/* <div className={clsx("form-control", styles.formControl)}>
        <div className={clsx("input-group", styles.inputGroup)}>
          <label className={clsx("label", styles.label)} htmlFor="email">get first hand access here</label>
          <input className={clsx("input", styles.input)} type="email" id="email" name="email" placeholder="get first hand access here" required />
          <button className={clsx("btn", styles.btn)}>Notify Me</button>
        </div>
      </div> */}

      <output className={clsx("output")} ref={signupFormFeedbackRef} />
    </form>
  );
};

export default Component;

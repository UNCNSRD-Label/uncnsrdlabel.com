"use client";

import { clsx } from "clsx";

import { useRef, FormEvent, FC } from "react";

import styles from "./index.module.css";

type Props = {
  className?: string;
};

export const SignupForm: FC<Props> = ({ className }) => {
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
        signupFormFeedbackRef.current.innerHTML = `<div class="container"><p style="justify-self: start;">Sexy not sorry&hellip;</p>
          <p style="justify-self: end;">Watch this space!</p></div>`;
      } else {
        signupFormFeedbackRef.current.classList.add("invalid");
        signupFormFeedbackRef.current.textContent = "An error occurred";
      }
    }
  };

  return (
    <form
      className={clsx(className, styles.form, "form")}
      onSubmit={handleSubmit}
      ref={signupFormRef}
    >
      <div className={clsx(styles.field, "field")}>
        <label className={clsx(styles.label, "label")} htmlFor="email">
          get first hand access here
        </label>
        <input
          className={clsx(styles.input, "input")}
          id="email"
          name="email"
          placeholder="get first hand access here"
          type="email"
          required
        />
      </div>
      <button className={clsx(styles.button, "button")}>notify me</button>
      <output
        className={clsx("output", styles.output)}
        ref={signupFormFeedbackRef}
      />
    </form>
  );
};

export default SignupForm;

"use client";

import { clsx } from "clsx";
import type { FC, FormEvent, ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useRef } from "react";

import styles from "./index.module.css";

type Inputs = {
  email: string;
};

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const JSONdata = JSON.stringify(data);

    const response = await fetch("/api/signup", {
      body: JSONdata,

      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await response.json();

    console.log({ result });

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
        signupFormFeedbackRef.current.innerHTML = `<p>Sexy not sorry.  Watch this space!</p>`;
      } else {
        signupFormFeedbackRef.current.classList.add("invalid");
        signupFormFeedbackRef.current.textContent = "An error occurred";
      }
    }
  };

  console.log(watch("email")); // watch input value by passing the name of it

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
      onSubmit={handleSubmit(onSubmit)}
      ref={signupFormRef}
    >
      <div className={clsx(styles.formControl, "form-control", "w-full")}>
        <label className={clsx(styles.label, "label")}>
          <span className="label-text">Sign up to the mailing list</span>
        </label>
        <label className="input-group w-full">
          <span>Email</span>
          <input
            placeholder="Your email address"
            className="input input-bordered w-full"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
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

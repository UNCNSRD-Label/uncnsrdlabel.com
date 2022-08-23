import { ValidationError, useForm } from "@formspree/react";

import Head from "next/head";
import Image from "next/future/image";

import { clsx } from "clsx";
import { Wizard, useWizard } from "react-use-wizard";

import styles from "./index.module.css";

import formStyles from "@styles/module/form.module.css";

import Layout from "@components/layout";

export default function Page() {
  const [state, handleSubmit] = useForm("xlevrnzp");

  if (state.succeeded) {
    return <div>Thank you for your interest!</div>;
  }

  const FormNavigation = () => {
    const { handleStep, isLastStep, isFirstStep, previousStep, nextStep } =
      useWizard();

    // Attach an optional handler
    handleStep(() => {
      console.log("Going to next step");
    });

    return (
      <div className={formStyles.navigation}>
        <button
          className={clsx("button", "button__filled", isFirstStep ? "disabled" : null)}
          type="button"
          onClick={previousStep}
        >
          Previous ⇦
        </button>
        <button
          className={clsx("button", "button__filled", isLastStep ? "hidden" : null)}
          type="button"
          onClick={nextStep}
        >
          Next ⇨
        </button>
        <button className={clsx("button", "button__filled", isLastStep ? null : "hidden")} type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    );
  };

  const Step1 = () => (
    <>
      <fieldset className={styles.fieldset}>
        <div className={styles.field}>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </fieldset>
      <FormNavigation />
    </>
  );

  const Step2 = () => (
    <>
      <fieldset className={styles.fieldset}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </fieldset>
      <FormNavigation />
    </>
  );

  const Step3 = () => (
    <>
      <fieldset className={styles.fieldset}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
      </fieldset>
      <FormNavigation />
    </>
  );

  return (
    <Layout>
      <Head>
        <title>UNCNSRD - Inquiry</title>
      </Head>

      <h1 className={styles.title}>
        Lorem ipsum dolor sit amet
      </h1>

      <div className={styles.formContainer}>
        <div className={styles.imageContainer}>
          <Image
            alt="Microphone"
            fill
            sizes="100vw"
            src="/images/Gear-Podcast-Gear-1327244548.webp"
          />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Wizard>
            <Step1 />
            <Step2 />
            <Step3 />
          </Wizard>
        </form>
      </div>
    </Layout>
  );
}

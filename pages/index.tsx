import { clsx } from "clsx";
import Head from "next/head";

import { useRef, FormEvent } from "react";

import styles from "./index.module.css";

import Layout from "@components/layout";

type Props = {
  children?: React.ReactNode;
};

export default function Home() {
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
        signupFormFeedbackRef.current.textContent = "We'll notify you when we have something to show you";
      } else {
        signupFormFeedbackRef.current.classList.add("invalid");
        signupFormFeedbackRef.current.textContent = "An error occurred";
      }
    }
  };

  return (
    <Layout showHeaderAndFooter={false}>
      <Head>
        <title>UNCNSRD - Home</title>
      </Head>

      <div className={styles.container}>
        {/* <Link href="https://www.uncnsrdswim.com" passHref>
          <a className={styles.logotype} title="uncnsrdswim.com">
            <Image
              alt="UNCNSRD logo"
              fill
              sizes="25vw, 50vw"
              src="/images/logos/logotype-with-shadow.svg"
            />
          </a>
        </Link> */}

        <h1 className={styles.title}>UNCNSRD</h1>

        <form
          action="/api/klaviyo"
          className={clsx(styles.form, "columns", "transparent")}
          method="POST"
          onSubmit={handleSubmit}
          ref={signupFormRef}
        >
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email for first access"
            required
          />
          <button className="button__filled">Notify Me</button>
          <output
            className={clsx("output")}
            ref={signupFormFeedbackRef}
          />
        </form>

        <section className={styles.copy}>
          <h1 className={styles.title}>UNCNSRD</h1>
          <p>
            UNCNSRD is multifunctional swimwear for female figures who
            aren&apos;t afraid to show off their assets and want to feel
            unapologetically sexy.
          </p>
          <p>
            Inspired by rebellious women and street fashion, UNCNSRD strives to
            create innovative designs that can be multifunctional, yet still
            remain practical at its core.
          </p>
        </section>
      </div>
    </Layout>
  );
}

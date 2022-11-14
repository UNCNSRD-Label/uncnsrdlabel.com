import { clsx } from "clsx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
        signupFormFeedbackRef.current.innerHTML =
          `<p>Sexy not sorry</p>
          <p>Watch this space!</p>`;
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
        <Link href="/" passHref className={styles.logotype} title="uncnsrdlabel.com">
          <Image
            alt="UNCNSRD logo"
            fill
            src="/images/logos/logotype.svg"
          />
        </Link>

        {/* <h1 className={styles.title}>UNCNSRD</h1> */}

        <form
          className={clsx(
            styles.form,
            "grid",
            "md:grid-cols-3",
            "gap-4",
            "md:gap-2",
            "w-3/4",
            "max-w-md",
            "justify-items-center",
            "items-end",
            "md:justify-items-stretch",
            "transparent"
          )}
          onSubmit={handleSubmit}
          ref={signupFormRef}
        >
          <div className={clsx("field", "md:col-span-2")}>
            <label htmlFor="email">get first hand access here</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <button className={clsx("button", "button__filled")}>
            Notify Me
          </button>
          <output className={clsx("output")} ref={signupFormFeedbackRef} />
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

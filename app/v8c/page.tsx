import { clsx } from "clsx";
import Image from "next/image";

import SignupForm from "#/components/SignupForm";

import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <title>UNCNSRD - Home</title>
      <div className={clsx(styles.container)}>
        <h1 className={clsx(styles.title, "mask")}>UNCNSRD</h1>

        <div className={clsx(styles.information)}>
          <Image
            alt="UNCNSRD logo"
            className={clsx(styles.logotype)}
            height={140}
            priority
            src="/images/logos/logotype.svg"
            width={640}
          />

          <SignupForm className={clsx(styles.signupForm)} />

          <section className={styles.copy}>
            <h1 className={styles.title1}>UNCNSRD</h1>
            <h2 className={styles.title2}>LAUNCHING SOON</h2>
            <p>
              UNCNSRD is multifunctional swimwear for female figures who
              aren&apos;t afraid to show off their assets and want to feel
              unapologetically sexy.
            </p>
            <p>
              Inspired by rebellious women and street fashion, UNCNSRD strives
              to create innovative designs that can be multifunctional, yet
              still remain practical at its core.
            </p>
          </section>
        </div>

        <div className={clsx(styles.background)}>
          <figure className={clsx(styles.figure)}>
            <Image
              alt="Model shot"
              className={clsx(styles.image)}
              fill
              priority
              src="/images/v1/IMG_0894.jpg"
            />
          </figure>
          <figure className={clsx(styles.figure)}>
            <Image
              alt="Model shot"
              className={clsx(styles.image)}
              fill
              priority
              src="/images/v1/IMG_0893.jpg"
            />
          </figure>
          <figure className={clsx(styles.figure)}>
            <Image
              alt="Model shot"
              className={clsx(styles.image)}
              fill
              priority
              src="/images/v1/IMG_0895.jpg"
            />
          </figure>
          <figure className={clsx(styles.figure)}>
            <Image
              alt="Model shot"
              className={clsx(styles.image)}
              fill
              priority
              src="/images/v1/IMG_0894.jpg"
            />
          </figure>
          <figure className={clsx(styles.figure)}>
            <Image
              alt="Model shot"
              className={clsx(styles.image)}
              fill
              priority
              src="/images/v1/IMG_0893.jpg"
            />
          </figure>
          <figure className={clsx(styles.figure)}>
            <Image
              alt="Model shot"
              className={clsx(styles.image)}
              fill
              priority
              src="/images/v1/IMG_0895.jpg"
            />
          </figure>
        </div>
      </div>
    </>
  );
}

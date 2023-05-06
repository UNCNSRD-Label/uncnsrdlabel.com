import { clsx } from "clsx";
import Image from "next/image";

import SignupForm from "#/components/SignupForm";

import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <title>UNCNSRD - Home</title>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.content)}>
          <h1 className={clsx(styles.title)}>UNCNSRD</h1>
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
        <SignupForm className={clsx(styles.signupForm)} />
      </div>
    </>
  );
}

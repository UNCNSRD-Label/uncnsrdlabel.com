import { clsx } from "clsx";
import Image from "next/image";

import SignupForm from "#/components/SignupForm";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={clsx(styles.container)}>
      <title>UNCNSRD - Landing Page (WIP)</title>

      <Image
        alt="UNCNSRD logo"
        className={clsx(styles.logotype)}
        height={140}
        priority
        src="/images/logos/logotype.svg"
        width={640}
      />

      <SignupForm className={clsx(styles.signupForm)} />

      <div className={clsx(styles.background)}>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            height={2048}
            priority
            src="/images/v1/IMG_0894.jpg"
            width={1364}
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            height={2048}
            priority
            src="/images/v1/IMG_0893.jpg"
            width={1364}
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            height={2048}
            priority
            src="/images/v1/IMG_0895.jpg"
            width={1364}
          />
        </figure>
      </div>
    </div>
  );
}

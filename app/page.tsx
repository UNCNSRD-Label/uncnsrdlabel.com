import { clsx } from "clsx";
import Image from "#/components/image";
import SignupForm from "#/components/signup-form";

import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <title>UNCNSRD - LAUNCHING SOON</title>
      <div className={clsx(styles.container)}>
        <span
          className={clsx(styles.title, "bg-gradient-to-r from-black to-85%")}
        >
          <h1 className={clsx(styles.heading)}>UNCNSRD</h1>
        </span>

        <div className={clsx(styles.information)}>
          <h2 className={clsx(styles.copy, "filter drop-shadow-md")}>
            LAUNCHING SOON
          </h2>
          <SignupForm className={clsx(styles.signupForm)} />
        </div>
      </div>
      <div className={clsx(styles.background)}>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            priority
            src="/images/MAV8225.jpeg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            priority
            src="/images/MAV07147.jpeg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            priority
            src="/images/MAV7862.jpeg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            priority
            src="/images/MAV8628.jpeg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            priority
            src="/images/MAV07551.jpeg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            priority
            src="/images/MAV7949.jpeg"
          />
        </figure>
        {/* copy */}
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            priority
            src="/images/MAV8225.jpeg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            priority
            src="/images/MAV07147.jpeg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            priority
            src="/images/MAV7862.jpeg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            priority
            src="/images/MAV8628.jpeg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            priority
            src="/images/MAV07551.jpeg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            priority
            src="/images/MAV7949.jpeg"
          />
        </figure>
      </div>
    </>
  );
}

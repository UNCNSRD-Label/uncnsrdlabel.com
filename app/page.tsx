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
          className={clsx(
            styles.title,
            "landscape:bg-gradient-to-r landscape:from-black/50 to-85%"
          )}
        >
          <h1 className={clsx(styles.heading, "filter drop-shadow-md")}>
            UNCNSRD
          </h1>
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
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/MAV8225.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/MAV07147.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/MAV7862.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/MAV8628.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/MAV07551.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/MAV7949.jpg"
          />
        </figure>
        {/* copy */}
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/MAV8225.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/MAV07147.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/MAV7862.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/MAV8628.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/MAV07551.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="Model shot"
            className={clsx(styles.image)}
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/MAV7949.jpg"
          />
        </figure>
      </div>
    </>
  );
}

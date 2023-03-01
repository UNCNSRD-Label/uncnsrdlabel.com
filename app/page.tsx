import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

import SignupForm from "#/components/SignupForm";
import Video from "#/components/Video";

import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <title>UNCNSRD - Home</title>
      <div className={clsx(styles.container, "fitViewportMinimumHeight")}>
        <Link
          className={styles.logotype}
          href="/"
          passHref
          title="uncnsrdlabel.com"
        >
          <Image
            alt="UNCNSRD logo"
            fill
            priority
            src="/images/logos/logotype.svg"
          />
        </Link>

        {/* <h1 className={styles.title}>UNCNSRD</h1> */}

        <Video
          autoplay
          className={clsx(styles.video)}
          loop
          url={"/videos/south-beach-ride.mp4"}
          // url={'https://www.youtube.com/watch?v=zohpogt56Bg'}
        />

        <SignupForm className={clsx(styles.form)} />

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
    </>
  );
}

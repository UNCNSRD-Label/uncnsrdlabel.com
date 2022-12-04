import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

import SignupForm from "#/components/SignupForm";

import styles from "#/app/page.module.css";

export default function Page() {
  return (
    <>
      <title>UNCNSRD - Home</title>
      <div className={clsx(styles.container, "fitViewport", "fixed")}>
        <Link href="/" className={styles.logotype} title="uncnsrdlabel.com">
          <Image
            alt="UNCNSRD logo"
            fill
            priority
            src="/images/logos/logotype.svg"
          />
        </Link>

        {/* <h1 className={styles.title}>UNCNSRD</h1> */}

        <SignupForm className={clsx("items-end", "justify-items-center", "max-w-md", "md:justify-items-stretch", "transparent", "w-3/4",)} />

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

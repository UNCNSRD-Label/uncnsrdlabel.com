import { clsx } from "clsx";

import { Error } from "#/components/Error";
import Image from "next/image";

import styles from "./_error.module.css";

export default function Page() {
  return (
    <main className={clsx(styles.main)}>
      <Image
        alt={"UNCNSRD logo"}
        className={clsx(styles.logoImage, "dark:invert")}
        height={80}
        src="/images/logos/logotype.svg"
        width={360}
      />
      <Error statusCode={500} />
    </main>
  );
}

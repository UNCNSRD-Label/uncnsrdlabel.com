import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

import SignupForm from "#/components/SignupForm";

import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <title>UNCNSRD - Home</title>
      <div className={clsx(styles.container)}>
        <Link
          href="/"
          className={styles.logotype}
          title="Return to listing page"
        >
          <Image
            alt="UNCNSRD logo"
            className={clsx(styles.logotype)}
            height={140}
            priority
            src="/images/logos/logotype.svg"
            width={640}
          />
        </Link>

        <h1 className={clsx(styles.title)}>landing page concepts</h1>

        <nav className={clsx(styles.nav)}>
          <span>
            Concept 1 (
            <Link className={clsx(styles.link)} href="/v1a" title="Concept 1A">
              A
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v1b" title="Concept 1B">
              B
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v1c" title="Concept 1C">
              C
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v1d" title="Concept 1D">
              D
            </Link>
            )
          </span>
          <span>
            Concept 2 (
            <Link className={clsx(styles.link)} href="/v2a" title="Concept 2A">
              A
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v2b" title="Concept 2B">
              B
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v2c" title="Concept 2C">
              C
            </Link>
            )(
            <Link className={clsx(styles.link)} href="/v2d" title="Concept 2D">
              D
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v2e" title="Concept 2E">
              E
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v2f" title="Concept 2F">
              F
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v2g" title="Concept 2G">
              G
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v2h" title="Concept 2H">
              H
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v2i" title="Concept 2I">
              I
            </Link>
            )
          </span>
          <span>
            Concept 3 (
            <Link className={clsx(styles.link)} href="/v3a" title="Concept 3A">
              A
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v3b" title="Concept 3B">
              B
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v3c" title="Concept 3C">
              C
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v3d" title="Concept 3D">
              D
            </Link>
            ){" "}
          </span>
          <span>
            Concept 4 (
            <Link className={clsx(styles.link)} href="/v4a" title="Concept 4A">
              A
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v4b" title="Concept 4B">
              B
            </Link>
            )
          </span>
          <span>
            Concept 5 (
            <Link className={clsx(styles.link)} href="/v5a" title="Concept 5A">
              A
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v5b" title="Concept 5B">
              B
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v5c" title="Concept 5C">
              C
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v5d" title="Concept 5D">
              D
            </Link>
            ){" "}
          </span>
          <span>
            Concept 6 (
            <Link className={clsx(styles.link)} href="/v6a" title="Concept 6A">
              A
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v6b" title="Concept 6B">
              B
            </Link>
            )
          </span>
          <span>
            Concept 7 (
            <Link className={clsx(styles.link)} href="/v7a" title="Concept 7A">
              A
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v7b" title="Concept 7B">
              B
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v7c" title="Concept 7C">
              C
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v7d" title="Concept 7D">
              D
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v7e" title="Concept 7E">
              E
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v7f" title="Concept 7F">
              F
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v7g" title="Concept 7G">
              G
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v7h" title="Concept 7H">
              H
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v7i" title="Concept 7I">
              I
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v7j" title="Concept 7J">
              J
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v7k" title="Concept 7K">
              K
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v7l" title="Concept 7L">
              L
            </Link>
            ){" "}
          </span>
          <span>
            Concept 8 (
            <Link className={clsx(styles.link)} href="/v8a" title="Concept 8A">
              A
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v8b" title="Concept 8B">
              B
            </Link>
            ) (
            <Link className={clsx(styles.link)} href="/v8c" title="Concept 8C">
              C
            </Link>
            )
          </span>
          <span>
            Experiments (
            <Link
              className={clsx(styles.link)}
              href="/v0.1a"
              title="Concept 0.1a"
            >
              0.1A
            </Link>
            ) (
            <Link
              className={clsx(styles.link)}
              href="/v0.1b"
              title="Concept 0.1B"
            >
              0.1B
            </Link>
            ) (
            <Link
              className={clsx(styles.link)}
              href="/v0.2a"
              title="Concept 0.2a"
            >
              0.2A
            </Link>
            ) (
            <Link
              className={clsx(styles.link)}
              href="/v0.2b"
              title="Concept 0.2B"
            >
              0.2B
            </Link>
            )
          </span>
        </nav>
      </div>
    </>
  );
}

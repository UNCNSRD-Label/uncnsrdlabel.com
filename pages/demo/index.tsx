import Demo from "#/components/canvas/Demo";

import styles from "./index.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <title className={styles.title}>UNCNSRD - Demo</title>
      <Demo />
    </main>
  );
}

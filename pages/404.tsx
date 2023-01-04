import { clsx } from "clsx";
import { Error } from "#/components/Error";
import Layout from "#/components/Layout";

import styles from "./_error.module.css";

export default function Page() {
  return (
    <Layout
      classNameDrawerContent={clsx(
        styles.drawerContent,
        "drawerContentOverflowY"
      )}
      classNameMain={clsx(styles.main)}
      // data={data}
      showHeaderAndFooter={true}
    >
      <Error statusCode={404} />
    </Layout>
  );
}

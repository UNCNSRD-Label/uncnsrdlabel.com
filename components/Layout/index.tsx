import { clsx } from "clsx";
import Head from "next/head";

import Header from "#/components/Header";
import Footer from "#/components/Footer";

import styles from "./index.module.css";

type Props = {
  children?: React.ReactNode;
  constrainWidth?: boolean;
  showHeaderAndFooter?: boolean;
};

export const Layout: React.FC<Props> = ({
  children,
  constrainWidth = false,
  showHeaderAndFooter = true,
}) => {
  return (
    <>
      <Head>
        <title>UNCNSRD</title>
        <meta
          name="description"
          content="UNCNSRD is multifunctional swimwear for female figures who aren’t afraid to show off their assets and want to feel unapologetically sexy."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div
        className={clsx(
          styles.container,
          constrainWidth && styles.constrain_width,
          showHeaderAndFooter && styles.show_header_and_footer
        )}
      >
        {showHeaderAndFooter && <Header />}
        <main className={clsx(styles.main)}>{children}</main>
        {showHeaderAndFooter && <Footer />}
      </div>
    </>
  );
};

export default Layout;

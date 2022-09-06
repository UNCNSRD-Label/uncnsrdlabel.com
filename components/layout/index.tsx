import { clsx } from "clsx";
import Head from "next/head";
import Script from "next/script";

import Header from "@components/header";
import Footer from "@components/footer";

import styles from "./layout.module.css";

type Props = {
  children?: React.ReactNode;
  showHeaderAndFooter?: boolean;
};

export const Layout: React.FC<Props> = ({
  children,
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
          showHeaderAndFooter && styles.show_header_and_footer
        )}
      >
        {showHeaderAndFooter && <Header />}
        <main className={clsx(styles.main)}>{children}</main>
        {showHeaderAndFooter && <Footer />}
      </div>

      {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
        <>
          <Script
            id="google-tag-manager"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');`,
            }}
          />

          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </>
      )}
    </>
  );
};

export default Layout;

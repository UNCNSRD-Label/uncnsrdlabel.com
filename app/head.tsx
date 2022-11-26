import Script from "next/script";

export default function Head() {
  const title = "UNCNSRD";
  const description =
    "UNCNSRD is multifunctional swimwear for female figures who aren’t afraid to show off their assets and want to feel unapologetically sexy.";

  return (
    <>
      <title>{title}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta charSet="utf-8" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="language" content="english" />

      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"
      />
      <meta name="robots" content="index,follow" />
      <meta name="distribution" content="web" />

      <meta name="author" content="Karlito Who Else" />
      <meta name="designer" content="Karlito Who Else" />
      <meta name="publisher" content="Karlito Who Else" />

      <link rel="manifest" href="/site.webmanifest" />

      <link rel="apple-touch-startup-image" href="/startup.png" />

      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      <link
        rel="apple-touch-icon"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />

      <link rel="shortcut icon" href="/favicon.ico" />
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

      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#000000" />

      <meta name="og:title" content={title} />
      <meta name="og:type" content="site" />
      <meta name="og:url" content={process.env.HOST} />
      <meta name="og:image" content={"/icons/share.png"} />
      <meta name="og:site_name" content={title} />
      <meta name="og:description" content={description} />

      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}

      {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@onirenaud" />

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
}

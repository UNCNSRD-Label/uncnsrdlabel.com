import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;800&family=Open+Sans&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className={"fitViewport"}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

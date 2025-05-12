import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* External CSS or fonts can be added here */}
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          />
          {/* Add any global external scripts if necessary */}
        </Head>
        <body>
          <Main /> {/* This is where your React components will render */}
          <NextScript /> {/* Next.js scripts for hydration */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;

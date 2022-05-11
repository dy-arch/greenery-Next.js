import type { AppProps } from "next/app";
import Head from "next/head";
import reset from "styles/GlobalStyles";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>초록친구</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

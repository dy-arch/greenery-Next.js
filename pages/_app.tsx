import type { AppProps } from "next/app";
import Head from "next/head";
import reset from "styles/GlobalStyles";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={reset} />
      <Head>
        <title>초록친구</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

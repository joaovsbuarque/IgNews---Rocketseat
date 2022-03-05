import { AppProps } from "next/app";
import { Header } from "../components/Header";

import { getProviders as NextAuthGetProvider } from "next-auth/react";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthGetProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthGetProvider>
  );
}

export default MyApp;

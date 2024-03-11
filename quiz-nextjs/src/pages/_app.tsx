import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Quiz App!</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

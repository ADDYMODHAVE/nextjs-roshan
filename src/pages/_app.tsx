import { Footer } from "@/Components/Header and Footer/Footer";
import { Header } from "@/Components/Header and Footer/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "@/Store/Context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ContextProvider>
    </>
  );
}

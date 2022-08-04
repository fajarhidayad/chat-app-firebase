import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Provider as StateProvider } from "jotai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </AnimatePresence>
  );
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NavBar />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;

import "@/styles/globals.css";
import { ProgramProvider } from "../contexts/programContext";
import App from "next/app";

export default function MyApp({ Component, pageProps }) {
  return (
    <ProgramProvider>
      <Component {...pageProps} />;
    </ProgramProvider>
  );
}

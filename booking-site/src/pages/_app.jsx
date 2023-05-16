import "@/styles/globals.css";
import { ProgramProvider } from "../contexts/programContext";
import App from "next/app";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function MyApp({ Component, pageProps, bandData }) {
  return (
    <ProgramProvider value={bandData}>
      <Component {...pageProps} />
    </ProgramProvider>
  );
}

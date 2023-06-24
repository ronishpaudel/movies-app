import type { AppProps } from "next/app";
import "../components/Movies.css";
import "../components/Card.css";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

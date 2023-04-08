import "@/styles/globals.css";

import MainContainer from "@/components/MainContainer";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
      <Analytics />
    </MainContainer>
  );
}

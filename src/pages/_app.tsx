import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { SSRProvider } from "react-aria-components";

import { api } from "../utils/api";

import "../styles/globals.css";


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SSRProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </SSRProvider>
  );
};

export default api.withTRPC(MyApp);

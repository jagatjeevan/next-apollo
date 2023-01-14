import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import client from "../graphql/apollo-client";
import HeaderLinks from "../components/HeaderLinks";
import "../styles/globals.css";
import { setConfig } from "../config/appConfig";

export default function App({ Component, pageProps }: AppProps) {
  const endPointUrl = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;
  setConfig("endPointUrl", endPointUrl);
  return (
    <ApolloProvider client={client}>
      <HeaderLinks />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

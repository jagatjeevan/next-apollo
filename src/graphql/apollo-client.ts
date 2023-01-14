import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getValueFromConfig } from "../config/appConfig";

const endPointUrl = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
const client = new ApolloClient({
  uri: endPointUrl || getValueFromConfig("endPointUrl"), // Config was set for the issue : https://github.com/apollographql/react-apollo/issues/3270
  cache: new InMemoryCache(),
});

export default client;

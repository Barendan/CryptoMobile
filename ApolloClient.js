import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

// const BASE_URL = "http://localhost:4000";
// Requires a direct IP when testing on Android Simulator
const BASE_URL = "http://10.0.2.2:4000";

const httpLink = new HttpLink({
  uri: BASE_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;

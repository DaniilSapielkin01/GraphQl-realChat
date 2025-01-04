import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

export const link = new WebSocketLink({
  uri: "http://localhost:4000/",
  options: {
    reconnect: true,
  },
});

export const client = new ApolloClient({
  link,
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

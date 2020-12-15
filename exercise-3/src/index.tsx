import React from "react";
import ReactDom from "react-dom";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import App from "./components/App";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

ReactDom.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("app")
);

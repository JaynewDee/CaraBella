import Main from './pages/Main';
import {
   ApolloClient,
   InMemoryCache,
   ApolloProvider,
   createHttpLink,
} from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
   setContext
} from "@apollo/client/link/context";


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
   uri: "/graphql",
});
const authLink = setContext((_, {
   headers
}) => {
   // get the authentication token from local storage if it exists
   const token = localStorage.getItem("id_token");
   // return the headers to the context so httpLink has access to them
   return {
      headers: {
         ...headers,
         authorization: token ? `Bearer ${token}` : "",
      },
   };
});
const client = new ApolloClient({
   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
   link: authLink.concat(httpLink),
   cache: new InMemoryCache(),
});

const App = () => {
   return (
      <ApolloProvider client={client}>
         <BrowserRouter>
            <div className="App">
               <Main id="main"/>
            </div>
         </BrowserRouter>
      </ApolloProvider>
   );
}

export default App;
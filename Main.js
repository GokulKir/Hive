import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App';


import { GraphQLClient, ClientContext } from 'graphql-hooks'

const client = new GraphQLClient({
  url: `https://hive-dash.credot.dev/graphql`
 
})


 

/*export default function Main() {
    return (
      <ApolloProvider client={client}>
      <PaperProvider>
        <App />
      </PaperProvider>
      </ApolloProvider>
    );
  }*/
   

export default function Main() {
  return (
    <ClientContext.Provider value={client}>
    <PaperProvider>
      <App />
    </PaperProvider>
    </ClientContext.Provider>
  );
}

import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './App';


import { GraphQLClient, ClientContext } from 'graphql-hooks'

const client = new GraphQLClient({
  url: `https://hive-dash.credot.dev/graphql`
 
})




export default function Main() {
  return (
    <ClientContext.Provider value={client}>
    <PaperProvider>
      <App />
    </PaperProvider>
    </ClientContext.Provider>
  );
}

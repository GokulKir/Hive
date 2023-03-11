import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './App';


import { GraphQLClient, ClientContext } from 'graphql-hooks'

const client = new GraphQLClient({
  url: `https://hive-dash.credot.dev/graphql`,
  // headers: {
  //   token: `yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYWpuYXNoLmFqdTMyM0BnbWFpbC5jb20iLCJ1aWQiOiI2M2NhNTkwNTY2NjgzMTIwNTZmODM5NzciLCJuYW1lIjoiQWpuYXNoaWJudW1lciJ9LCJpYXQiOjE2Nzg0NDc0NDksImV4cCI6MTY3ODcwNjY0OX0.YA9pLEhTgsqpvTfbADnvlKYccLcO29XN7TbM1qfs5dM`,
  // }
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

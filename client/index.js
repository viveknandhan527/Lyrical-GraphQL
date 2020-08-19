import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

import { ExchangeRates} from './songs';

const client = new ApolloClient({
  uri: 'https://71z1g.sse.codesandbox.io/graphql',
  cache: new InMemoryCache()
});


const Root = () => {
  return (
    <ApolloProvider client={client}>
        <div><ExchangeRates /></div>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

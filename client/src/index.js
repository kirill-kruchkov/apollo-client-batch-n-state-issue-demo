import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { withClientState } from 'apollo-link-state'
import { ApolloLink } from 'apollo-link'
// import { HttpLink } from 'apollo-link-http'
import { BatchHttpLink as HttpLink } from 'apollo-link-batch-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import App from './App'

// window.DEBUG = true

const cache = new InMemoryCache()

const BASE_URL = `http://localhost:${process.env.REACT_APP_GQL_PORT}`

const httpLink = new HttpLink({
  uri: BASE_URL,
})
const stateLink = withClientState({ resolvers: {} })
const link = ApolloLink.from([stateLink, httpLink])
const client = new ApolloClient({
  link,
  cache,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

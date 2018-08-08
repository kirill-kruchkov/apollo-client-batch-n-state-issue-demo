import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import logo from './logo.svg'
import './App.css'

const QUERY_1 = gql`
  query {
    books {
      title
    }
  }
`

const QUERY_2 = gql`
  query {
    books {
      author
    }
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Query query={QUERY_1}>
          {({ data, loading }) =>
            loading ? (
              <p>Loading...</p>
            ) : (
              <pre style={{ textAlign: 'left' }}>
                {JSON.stringify(data, null, 2)}
              </pre>
            )
          }
        </Query>
        <Query query={QUERY_2}>
          {({ data, loading }) =>
            loading ? (
              <p>Loading...</p>
            ) : (
              <pre style={{ textAlign: 'left' }}>
                {JSON.stringify(data, null, 2)}
              </pre>
            )
          }
        </Query>
      </div>
    )
  }
}

export default App

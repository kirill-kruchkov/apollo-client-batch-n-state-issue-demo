const { ApolloServer, gql } = require('apollo-server')

const links = [
  {
    url: 'http://graphql.org/',
    id: '1',
    description: 'The Best Query Language',
  },
  {
    url: 'http://dev.apollodata.com/',
    id: '2',
    description: 'Awesome GraphQL Client',
  },
]

const typeDefs = gql`
  type Link {
    description: String
    url: String
    id: Int
  }

  type Query {
    allLinks: [Link]
  }

`

const resolvers = {
  Query: {
    allLinks: () => links,
  },
}

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers })

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})

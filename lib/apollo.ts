import {ApolloClient,InMemoryCache} from "@apollo/client"

const apolloClient = new ApolloClient({
  url:"http://localhost:3000/api/graphql"
  cache: new InMemoryCache()
})

export default apolloClient
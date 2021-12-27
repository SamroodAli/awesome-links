import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Link {
    id: String
    description: String
    url: String
    category: String
    imageUrl: String
    users: [String]
  }

  type Query {
    links: [Link]!
  }
`;
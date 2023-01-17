import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
  }

  type Country {
    code: String
    name: String
    emoji: String
  }

  type Query {
    getUsers: [User]
    getUser(name: String!): User!
    getCountry: [Country]
  }
`;

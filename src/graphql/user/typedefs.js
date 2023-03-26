import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  # query variables
  # query getUser($id: ID!, $teste: Boolean) {
  #   user(
  #     id: $id,
  #     teste: $teste
  #   ) {
  #     userName
  #     id
  #   }
  # }

  #   {
  #   "id": "602",
  #   "teste": true
  # }

  # extend type Query {
  #   user(id: ID!, teste: Boolean): User!
  #   users: [User!]!
  # }

  extend type Query {
    user(id: ID!): User!
    users: [User!]!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
    createdAt: String!
    # posts:[Post!]!
  }
`;

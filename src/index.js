import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';
import fetch from 'node-fetch';

// typeDefs: gql`
//   type Query {
//     # colocar ! faz com que o atributo seja
//     # obrigatório e nunca pode ser null
//     id: ID!
//     name: String!
//     age: Int!
//     married: Boolean!
//     average: Float
//     arrayString: [String!]!
//   }
// `,
// resolvers: {
//   Query: {
//     id: () => 1,
//     name: () => 'Kelvin',
//     age: () => 30,
//     average: () => 30.3,
//     married: () => false,
//     arrayString: () => ['A', 'B'],
//   },
// },

// typeDefs: gql`
//     # criando Objetos
//     type User {
//       id: ID!
//       userName: String!
//     }

//     type Post {
//       id: ID!
//       userName: String!
//     }

//     type Query {
//       user: User! # objeto
//       users: [User!]! #array
//     }
//   `,
//   resolvers: {
//     Query: {
//       user: () => {
//         return {
//           id: '123123',
//           userName: 'Kelvin',
//         };
//       },
//       users: () => {
//         return [
//           {
//             id: '123123',
//             userName: 'Kelvin',
//           },
//           {
//             id: '45454',
//             userName: 'Tati',
//           },
//         ];
//       },
//     },
//   },

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      fetch,
    };
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server is running on ${url}`);
});

const { ApolloServer, gql } = require("apollo-server");

// scaler types String, Int, Float, Boolean

const typeDefs = gql`
  type Query {
    hello: [String!]!
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return ["hey", "friend", "it's me"];
    },
    numberOfAnimals: () => {
      return 55;
    },
    price: () => {
      return 44.67888;
    },
    isCool: () => {
      return true;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server is ready at ${url}`);
});

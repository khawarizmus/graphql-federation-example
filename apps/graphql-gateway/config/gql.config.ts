import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { registerAs } from '@nestjs/config';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

export default registerAs(
  'gql',
  (): ApolloGatewayDriverConfig => ({
    server: {
      // TODO: implement auth handling logic
      cors: false,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    },
    gateway: {
      supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
          { name: 'inventory', url: 'https://localhost:4002/graphql' },
          { name: 'pandas', url: 'https://localhost:4004/graphql' },
          { name: 'products', url: 'https://localhost:4001/graphql' },
          { name: 'reviews', url: 'https://localhost:4005/graphql' },
          { name: 'users', url: 'https://localhost:4003/graphql' },
        ],
      }),
    },
  }),
);

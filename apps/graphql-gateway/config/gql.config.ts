import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { registerAs } from '@nestjs/config';
// import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

export default registerAs(
  'gql',
  (): ApolloGatewayDriverConfig => ({
    server: {
      // TODO: implement auth handling logic
      cors: false,
      playground: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
    },
    gateway: {
      supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
          { name: 'users', url: 'http://localhost:4002/graphql' },
          { name: 'posts', url: 'http://localhost:4003/graphql' },
          { name: 'pandas', url: 'http://localhost:4004/graphql' },
        ],
      }),
    },
  }),
);

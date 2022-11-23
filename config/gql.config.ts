import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { registerAs } from '@nestjs/config';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

export default registerAs(
  'gql',
  (): ApolloGatewayDriverConfig => ({
    server: {
      cors: false,
    },
    gateway: {
      supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
          { name: 'users', url: 'http://user-service/graphql' },
          { name: 'posts', url: 'http://post-service/graphql' },
        ],
      }),
    },
  }),
);

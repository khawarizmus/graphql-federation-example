import { ApolloFederationDriverConfig } from '@nestjs/apollo';
import { registerAs } from '@nestjs/config';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { User } from '../src/posts/entities/user.entity';

export default registerAs(
  'gql',
  (): ApolloFederationDriverConfig => ({
    introspection: process.env.NODE_ENV === 'production' ? false : true,
    playground: process.env.NODE_ENV === 'production' ? false : true,
    debug: process.env.NODE_ENV === 'production' ? false : true,
    cors: false,
    // playground: false,
    // plugins: [ApolloServerPluginLandingPageLocalDefault()],
    autoSchemaFile: {
      federation: 2,
    },
    buildSchemaOptions: {
      orphanedTypes: [User],
    },
  }),
);

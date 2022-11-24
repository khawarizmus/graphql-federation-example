import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ThrottlerModuleOptions } from '@nestjs/throttler';
import { OgmaModuleOptions } from '@ogma/nestjs-module';
import { ExpressParser } from '@ogma/platform-express';
import { GraphQLParser } from '@ogma/platform-graphql';

const BACK_END_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.APP_URL
    : `https://localhost:${process.env.PORT}`;

const ORIGIN =
  process.env.NODE_ENV === 'production'
    ? [
        /https:\/\/localhost:[\d]{2,4}/, // TODO: add prod urls for cors
      ]
    : [
        /https:\/\/localhost:[\d]{2,4}/,
        'https://studio.apollographql.com',
        /.+netlify\.app/,
      ];

export default () => ({
  node_env: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 4000,
  api_url: BACK_END_URL,
  cors: {
    origin: ORIGIN,
    credentials: true,
  } as CorsOptions,
  logging: {
    service: {
      color: process.env.NODE_ENV === 'production' ? false : true,
      json: process.env.NODE_ENV === 'production',
      application: 'avst-gql-gateway',
    },
    interceptor: {
      http: ExpressParser,
      gql: GraphQLParser,
    },
  } as OgmaModuleOptions,
  throttling: {
    ttl: 60, // 1 min
    limit: 300,
  } as ThrottlerModuleOptions,
});

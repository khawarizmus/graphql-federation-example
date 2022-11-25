import { ApolloFederationDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { OgmaModule } from '@ogma/nestjs-module';
import { UsersModule } from './users/users.module';
// config
import Base from '../config/base.config';
import GraphQl from '../config/gql.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Base, GraphQl],
      envFilePath: './apps/users-api/.env',
      ignoreEnvFile: process.env.NODE_ENV === 'production' ? true : false,
      cache: true,
    }),
    OgmaModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (conf: ConfigService) => conf.get('logging'),
      inject: [ConfigService],
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloFederationDriver,
      imports: [ConfigModule],
      useFactory: async (conf: ConfigService) => conf.get('gql'),
      inject: [ConfigService],
    }),
    UsersModule,
  ],
})
export class UsersApiModule {}

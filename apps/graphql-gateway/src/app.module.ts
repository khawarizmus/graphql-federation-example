import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OgmaModule } from '@ogma/nestjs-module';
import { ThrottlerModule } from '@nestjs/throttler';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver } from '@nestjs/apollo';
// config files
import Base from '../config/base.config';
import GraphQl from '../config/gql.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Base, GraphQl],
      envFilePath: './apps/graphql-gateway/.env',
      ignoreEnvFile: process.env.NODE_ENV === 'production' ? true : false,
      cache: true,
    }),
    OgmaModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (conf: ConfigService) => conf.get('logging'),
      inject: [ConfigService],
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (conf: ConfigService) => conf.get('throttling'),
      inject: [ConfigService],
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloGatewayDriver,
      imports: [ConfigModule],
      useFactory: async (conf: ConfigService) => conf.get('gql'),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}

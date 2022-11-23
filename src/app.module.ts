import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OgmaModule } from '@ogma/nestjs-module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThrottlerModule } from '@nestjs/throttler';
import { GraphQLModule } from '@nestjs/graphql';
// config files
import Base from '../config/base.config';
import GraphQl from '../config/gql.config';
import { ApolloGatewayDriver } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Base, GraphQl],
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

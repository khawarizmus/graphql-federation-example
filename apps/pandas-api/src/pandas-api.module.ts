import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OgmaModule } from '@ogma/nestjs-module';
// config files
import Base from '../config/base.config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver } from '@nestjs/apollo';
import { PandasResolver } from './pandas/pandas.resolver';
import { PandasModule } from './pandas/pandas.module';
import { PandasService } from './pandas/pandas.service';
import GraphQl from '../config/gql.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Base, GraphQl],
      envFilePath: './apps/pandas-api/.env',
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
    PandasModule,
  ],
  providers: [PandasResolver, PandasService],
})
export class PandasApiModule {}

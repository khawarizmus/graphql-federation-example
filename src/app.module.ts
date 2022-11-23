import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OgmaModule } from '@ogma/nestjs-module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Base from '../config/base.config';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Base],
      cache: true,
    }),
    OgmaModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (conf: ConfigService) => conf.get('logging'),
      inject: [ConfigService],
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (conf: ConfigService) => conf.get('throttling'),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

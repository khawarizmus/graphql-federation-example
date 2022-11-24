import { Module } from '@nestjs/common';
import { PandasApiController } from './pandas-api.controller';
import { PandasApiService } from './pandas-api.service';

@Module({
  imports: [],
  controllers: [PandasApiController],
  providers: [PandasApiService],
})
export class PandasApiModule {}

import { Module } from '@nestjs/common';
import { PandasService } from './pandas.service';
import { PandasResolver } from './pandas.resolver';

@Module({
  providers: [PandasResolver, PandasService],
})
export class PandasModule {}

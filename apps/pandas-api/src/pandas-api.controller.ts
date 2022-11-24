import { Controller, Get } from '@nestjs/common';
import { PandasApiService } from './pandas-api.service';

@Controller()
export class PandasApiController {
  constructor(private readonly pandasApiService: PandasApiService) {}

  @Get()
  getHello(): string {
    return this.pandasApiService.getHello();
  }
}

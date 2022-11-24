import { Injectable } from '@nestjs/common';

@Injectable()
export class PandasApiService {
  getHello(): string {
    return 'Hello World!';
  }
}

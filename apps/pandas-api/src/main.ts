import { NestFactory } from '@nestjs/core';
import { PandasApiModule } from './pandas-api.module';

async function bootstrap() {
  const app = await NestFactory.create(PandasApiModule);
  await app.listen(3000);
}
bootstrap();

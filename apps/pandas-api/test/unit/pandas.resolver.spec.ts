import { Test, TestingModule } from '@nestjs/testing';
import { PandasResolver } from '../../src/pandas/pandas.resolver';

describe('PandasResolver', () => {
  let resolver: PandasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PandasResolver],
    }).compile();

    resolver = module.get<PandasResolver>(PandasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PandasService } from '../../src/pandas/pandas.service';

describe('PandasService', () => {
  let service: PandasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PandasService],
    }).compile();

    service = module.get<PandasService>(PandasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

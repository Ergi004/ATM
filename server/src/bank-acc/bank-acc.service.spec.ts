import { Test, TestingModule } from '@nestjs/testing';
import { BankAccService } from './bank-acc.service';

describe('BankAccService', () => {
  let service: BankAccService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankAccService],
    }).compile();

    service = module.get<BankAccService>(BankAccService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

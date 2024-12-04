import { Test, TestingModule } from '@nestjs/testing';
import { BankAccController } from './bank-acc.controller';
import { BankAccService } from './bank-acc.service';

describe('BankAccController', () => {
  let controller: BankAccController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankAccController],
      providers: [BankAccService],
    }).compile();

    controller = module.get<BankAccController>(BankAccController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

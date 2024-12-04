import { Module } from '@nestjs/common';
import { BankAccService } from './bank-acc.service';
import { BankAccController } from './bank-acc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAcc } from './entities/bank-acc.entity';
import { TransactionHistoryModule } from 'src/transaction-history/transaction-history.module';

@Module({
  imports: [TypeOrmModule.forFeature([BankAcc]), TransactionHistoryModule],
  controllers: [BankAccController],
  providers: [BankAccService],
  exports: [BankAccService],
})
export class BankAccModule {}

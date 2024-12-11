import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountHistoryService } from './account-history.service';
import { AccountHistoryController } from './account-history.controller';
import { AccountBalance } from './entities/account-history.entity';
import { BankAcc } from '../bank-acc/entities/bank-acc.entity';
import { BankAccService } from '../bank-acc/bank-acc.service';
import { TransactionHistory } from '../transaction-history/entities/transaction-history.entity';
import { TransactionHistoryService } from '../transaction-history/transaction-history.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountBalance, BankAcc, TransactionHistory]),
  ],
  controllers: [AccountHistoryController],
  providers: [AccountHistoryService, BankAccService, TransactionHistoryService],
  exports: [AccountHistoryService],
})
export class AccountHistoryModule {}

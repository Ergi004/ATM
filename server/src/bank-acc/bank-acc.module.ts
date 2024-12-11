import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccService } from './bank-acc.service';
import { BankAccController } from './bank-acc.controller';
import { BankAcc } from './entities/bank-acc.entity';
import { TransactionHistoryService } from 'src/transaction-history/transaction-history.service';
import { TransactionHistory } from 'src/transaction-history/entities/transaction-history.entity';
import { AccountHistoryModule } from '../account-history/account-history.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([BankAcc, TransactionHistory]),
    AccountHistoryModule,
  ],
  controllers: [BankAccController],
  providers: [BankAccService, TransactionHistoryService],
})
export class BankAccModule {}

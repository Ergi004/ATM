import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionHistory } from './entities/transaction-history.entity';
import { CreateTransactionHistoryDto } from './dto/create-transaction-history.dto';
import { UpdateTransactionHistoryDto } from './dto/update-transaction-history.dto';
import { BankAcc } from 'src/bank-acc/entities/bank-acc.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class TransactionHistoryService {
  constructor(
    @InjectRepository(TransactionHistory)
    private readonly transactionRepository: Repository<TransactionHistory>,
  ) {}

  async create(createTransactionHistoryDto: CreateTransactionHistoryDto) {
    const { userId, accountId, ...rest } = createTransactionHistoryDto;

    // Fetch related entities
    const user = await this.transactionRepository.manager.findOne(User, {
      where: { id: userId },
    });
    const account = await this.transactionRepository.manager.findOne(BankAcc, {
      where: { accountId },
    });

    if (!user || !account) {
      throw new Error('User or account not found');
    }

    // Create the transaction with the related entities
    const transaction = this.transactionRepository.create({
      ...rest,
      userId: user,
      accountId: account,
    });

    return await this.transactionRepository.save(transaction);
  }

  findAll() {
    return this.transactionRepository.find();
  }

  findOne(id: number) {
    return this.transactionRepository.findOneBy({ transactionId: id });
  }

  async update(
    id: number,
    updateTransactionHistoryDto: UpdateTransactionHistoryDto,
  ) {
    const { userId, accountId, ...rest } = updateTransactionHistoryDto;

    const user = userId
      ? await this.transactionRepository.manager.findOne(User, {
          where: { id: userId },
        })
      : undefined;

    const account = accountId
      ? await this.transactionRepository.manager.findOne(BankAcc, {
          where: { accountId },
        })
      : undefined;

    if ((userId && !user) || (accountId && !account)) {
      throw new Error('User or account not found');
    }

    // Fetch the existing transaction to update
    const transaction = await this.findOne(id);

    if (!transaction) {
      throw new Error(`Transaction with ID ${id} not found`);
    }

    // Update the transaction with the new data
    const updatedTransaction = {
      ...transaction,
      ...rest,
      ...(user && { userId: user }),
      ...(account && { accountId: account }),
    };

    return this.transactionRepository.save(updatedTransaction);
  }

  remove(id: number) {
    return this.transactionRepository.delete(id);
  }
}

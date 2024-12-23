import { Injectable } from '@nestjs/common';
import { CreateBankAccDto } from './dto/create-bank-acc.dto';
import { UpdateBankAccDto } from './dto/update-bank-acc.dto';
import { BankAcc } from './entities/bank-acc.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionHistoryService } from 'src/transaction-history/transaction-history.service';
import { AccountHistoryService } from 'src/account-history/account-history.service';

@Injectable()
export class BankAccService {
  constructor(
    @InjectRepository(BankAcc)
    private readonly accountRepository: Repository<BankAcc>,
    private readonly transactionHistoryService: TransactionHistoryService,
    private readonly accountHistoryService: AccountHistoryService,
  ) {}

  async create(createBankAccDto: CreateBankAccDto) {
    const userID = createBankAccDto.userId;
    const bankAccounts = await this.accountRepository.findBy({
      userId: userID,
    });
    if (bankAccounts.length >= 2)
      throw new Error('User cannot have more than two bank account');
    const account = this.accountRepository.create(createBankAccDto);
    return await this.accountRepository.save(account);
  }

  async deposit(amount: number, accountId: number, userId: number) {
    const existingAccount = await this.accountRepository.findOneBy({
      accountId,
    });
    if (!existingAccount) throw new Error('Account not found');

    const updatedBalance = Number(existingAccount.balance) + Number(amount);
    const updatedAccount = {
      accountType: existingAccount.accountType,
      balance: updatedBalance,
      userId,
    };

    await this.accountRepository.update(accountId, updatedAccount);

    // Record balance in history
    await this.accountHistoryService.create({
      accountId,
      balance: updatedBalance,
    });

    const transaction = {
      amount,
      accountId,
      userId,
      delivererId: userId,
      revieverId: null,
    };
    await this.transactionHistoryService.create(transaction);

    return updatedAccount;
  }

  async withdraw(amount: number, accountId: number, userId: number) {
    const existingAccount = await this.accountRepository.findOneBy({
      accountId,
    });
    if (!existingAccount) throw new Error('Account not found');

    const updatedBalance = Number(existingAccount.balance) - Number(amount);
    const updatedAccount = {
      accountType: existingAccount.accountType,
      balance: updatedBalance,
      userId,
    };

    await this.accountRepository.update(accountId, updatedAccount);

    // Record balance in history
    await this.accountHistoryService.create({
      accountId,
      balance: updatedBalance,
    });

    const transaction = {
      amount,
      accountId,
      userId,
      delivererId: userId,
      revieverId: null,
    };
    await this.transactionHistoryService.create(transaction);

    return updatedAccount;
  }
  async findByUserId(userId: number) {
    const bankAccounts = await this.accountRepository.findBy({ userId });
    return bankAccounts;
  }
  findAll() {
    return this.accountRepository.find();
  }

  findOne(id: number) {
    return this.accountRepository.findOneBy({ accountId: id });
  }

  async update(id: number, updateBankAccDto: UpdateBankAccDto) {
    await this.accountRepository.update(id, updateBankAccDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.accountRepository.delete(id);
  }
}

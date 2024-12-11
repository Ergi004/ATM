import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountBalance } from './entities/account-history.entity';
import { UpdateAccountHistoryDto } from './dto/update-account-history.dto';

@Injectable()
export class AccountHistoryService {
  constructor(
    @InjectRepository(AccountBalance)
    private readonly accountBalanceRepository: Repository<AccountBalance>,
  ) {}

  async create(history: { accountId: number; balance: number }) {
    const record = this.accountBalanceRepository.create({
      account: { accountId: history.accountId },
      balance: history.balance,
    });
    return await this.accountBalanceRepository.save(record);
  }

  async findByAccountId(accountId: number) {
    return this.accountBalanceRepository.find({
      where: { account: { accountId } },
    });
  }

  findAll() {
    return `This action returns all accountHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountHistory`;
  }

  update(id: number, updateAccountHistoryDto: UpdateAccountHistoryDto) {
    return `This action updates a #${id} accountHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountHistory`;
  }
}

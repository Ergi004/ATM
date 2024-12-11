import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { BankAcc } from '../../bank-acc/entities/bank-acc.entity';

@Entity('account_balances')
export class AccountBalance {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => BankAcc, (account) => account.balanceHistory, {
    onDelete: 'CASCADE',
  })
  account: BankAcc;

  @Column('decimal', { precision: 10, scale: 2 })
  balance: number;

  @CreateDateColumn()
  recordedAt: Date;
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../../user/entities/user.entity'; // Import the User entity
import { TransactionHistory } from 'src/transaction-history/entities/transaction-history.entity';

@Entity()
export class BankAcc {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  accountId: number;

  @Column({ name: 'balance', nullable: false, type: 'decimal' })
  balance: number;

  @Column({ name: 'accountType', default: 'Deposit', nullable: false })
  accountType: 'Savings' | 'Deposit';

  @ManyToOne(() => User, (user) => user.bankAccounts, { onDelete: 'CASCADE' })
  userId: number;

  @OneToMany(
    () => TransactionHistory,
    (transactionsHistory) => transactionsHistory.userId,
  )
  transactions: TransactionHistory[];
}

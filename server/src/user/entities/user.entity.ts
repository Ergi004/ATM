import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BankAcc } from '../../bank-acc/entities/bank-acc.entity'; // Import the BankAcc entity
import { TransactionHistory } from 'src/transaction-history/entities/transaction-history.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ name: 'firstName', nullable: false })
  firstName: string;

  @Column({ name: 'lastName', nullable: false })
  lastName: string;

  @Column({ name: 'phoneNumber', nullable: true })
  phoneNumber: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'role', default: 'SimpleUser', nullable: false })
  role: 'Admin' | 'SimpleUser';

  @OneToMany(() => BankAcc, (bankAcc) => bankAcc.userId)
  bankAccounts: BankAcc[];

  @OneToMany(
    () => TransactionHistory,
    (transactionsHistory) => transactionsHistory.userId,
  )
  transactions: TransactionHistory[];
}

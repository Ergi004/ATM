import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { BankAcc } from 'src/bank-acc/entities/bank-acc.entity';

@Entity()
export class TransactionHistory {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  transactionId: number;

  @Column({ name: 'amount', nullable: false, type: 'decimal' })
  amount: number;

  @Column({ name: 'delivererId', nullable: false, type: 'bigint' })
  delivererId: number;

  @Column({ name: 'receiverId', nullable: true, type: 'bigint' })
  revieverId: number;

  @ManyToOne(() => User, (user) => user.transactions, { onDelete: 'CASCADE' })
  userId: User;

  @ManyToOne(() => BankAcc, (bankAcc) => bankAcc.transactions, {
    onDelete: 'CASCADE',
  })
  accountId: BankAcc;
}

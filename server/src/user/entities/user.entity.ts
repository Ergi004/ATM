import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  username: string;

  @Column()
  phoneNumber: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 'SimpleUser' })
  role: 'Admin' | 'SimpleUser';
}

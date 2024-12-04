export class CreateBankAccDto {
  accountId: number;
  balance: number;
  accountType: 'Savings' | 'Deposit';
  userId: number;
}

export class CreateBankAccDto {
  accountId: number;
  balance: number;
  accountType: 'savings-account' | 'deposit-account';
  userId: number;
}

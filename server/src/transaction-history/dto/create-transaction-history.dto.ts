export class CreateTransactionHistoryDto {
  amount: number;
  delivererId: number;
  receiverId?: number;
  userId: number; // Raw user ID
  accountId: number; // Raw account ID
}

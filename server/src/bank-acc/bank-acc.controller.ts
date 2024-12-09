import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BankAccService } from './bank-acc.service';
import { CreateBankAccDto } from './dto/create-bank-acc.dto';

@Controller('bank-acc')
export class BankAccController {
  constructor(private readonly bankAccService: BankAccService) {}

  @Post('create')
  create(@Body() createBankAccDto: CreateBankAccDto) {
    return this.bankAccService.create(createBankAccDto);
  }

  @Post('deposit/:id')
  deposit(
    @Param('id') accountId: number,
    @Body() transaction: { amount: number; userId: number },
  ) {
    return this.bankAccService.deposit(
      transaction.amount,
      accountId,
      transaction.userId,
    );
  }

  @Post('withdraw/:id')
  withdraw(
    @Param('id') accountId: number,
    @Body() transaction: { amount: number; userId: number },
  ) {
    return this.bankAccService.withdraw(
      transaction.amount,
      accountId,
      transaction.userId,
    );
  }

  @Get('getAccountsByUserId/:id')
  findByUserId(@Param() userId: number) {
    return this.bankAccService.findByUserId(+userId);
  }

  @Get()
  findAll() {
    return this.bankAccService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bankAccService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.bankAccService.remove(id);
  }
}

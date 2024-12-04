import { PartialType } from '@nestjs/mapped-types';
import { CreateBankAccDto } from './create-bank-acc.dto';

export class UpdateBankAccDto extends PartialType(CreateBankAccDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountHistoryDto } from './create-account-history.dto';

export class UpdateAccountHistoryDto extends PartialType(CreateAccountHistoryDto) {}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  HttpException,
  HttpStatus,
  UseGuards,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { Response } from 'express';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      const existingUser = await this.userService.findOneBy(
        createUserDto.email,
      );
      if (existingUser) {
        throw new Error(`User ${createUserDto.userName} already exists`);
      }
      const createdUser = await this.userService.register(createUserDto);
      return createdUser;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return { message: 'Login successful', user: req.user };
  }

  @Post('logout')
  async logout(@Res() res: Response) {
    res.clearCookie('access_token');
    return res.status(HttpStatus.OK).json({ message: 'Logout successful' });
  }
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

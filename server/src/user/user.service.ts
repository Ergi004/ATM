import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async register(createUserDto: CreateUserDto) {
    const { password, ...rest } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.usersRepository.create({
      password: hashedPassword,
      ...rest,
    });
    return this.usersRepository.save(newUser);
  }

  async login(loginCredentials: CreateUserDto) {
    const { email, password } = loginCredentials;
    const existingUser = await this.usersRepository.findOneBy({ email });

    if (!existingUser) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return existingUser;
  }

  async findOneBy(userCredentials: string) {
    return await this.usersRepository.findOneBy({ email: userCredentials });
  }
  async findAll() {
    return await this.usersRepository.find();
  }
  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.update(id, updateUserDto);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.usersRepository.save(Object.assign(user, updateUserDto));
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

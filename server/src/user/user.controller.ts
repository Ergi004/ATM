import { Controller, Post, Body, Res, Get, UseGuards } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('auth')
export class UserController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<Omit<User, 'password'>> {
    return this.authService.register(createUserDto);
  }

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Body() req,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    const { access_token } = await this.authService.login(req);
    res.cookie('access_token', access_token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    });
    res.send({ message: 'Login successful' });
  }

  @Post('logout')
  logout(@Res() res: Response): void {
    res.clearCookie('access_token');
    res.send({ message: 'Logout successful' });
  }

  @UseGuards(JwtAuthGuard)
  @Get('check-auth')
  checkAuth(): { isAuthenticated: boolean } {
    return { isAuthenticated: true };
  }
}

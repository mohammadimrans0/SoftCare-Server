import { Controller, Get, Post, Put, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, Profile} from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('role') role: string,
  ): Promise<User> {
    return this.usersService.createUser(name, email, password);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return this.usersService.getUserById(id);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<{ access_token: string, user_id: string }> {
    const result = await this.usersService.login(email, password);
    if (!result) {
      throw new Error('Invalid credentials');
    }
    return result;
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(): Promise<{ message: string }> {
    return this.usersService.logout();
  }

  @Post('reset-password')
  async resetPassword(
    @Body('email') email: string,
    @Body('newPassword') newPassword: string,
  ): Promise<User> {
    return this.usersService.resetPassword(email, newPassword);
  }

  @Get('profile/:userId')
  async getProfileByUserId(@Param('userId') userId: string): Promise<Profile | null> {
    return this.usersService.getProfileByUserId(userId);
  }

  @Put('profile/:userId')
  async updateProfile(
    @Param('userId') userId: string,
    @Body() data: Partial<Profile>,
  ): Promise<Profile> {
    return this.usersService.updateProfile(userId, data);
  }
}

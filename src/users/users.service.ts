import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Profile, Role } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService, private jwtService: JwtService) {}

  async createUser(name: string, email: string, password: string, role: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userRole = role as Role;
    
    return this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: userRole,
        profile: {
          create: {},
        },
      },
    });
  }

  async getUserById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async login(email: string, password: string): Promise<{ access_token: string, user_id: string  } | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
  
    if (!user) return null;
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;
  
    const payload = { email: user.email, sub: user.id };
    const access_token = this.jwtService.sign(payload);
  
    return { access_token: access_token, user_id: user.id, };
  }

  async logout(): Promise<{ message: string }> {
    return { message: 'Logout successful' };
  }

  async resetPassword(email: string, newPassword: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    return this.prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });
  }

  async updateProfile(userId: string, data: Partial<Profile>): Promise<Profile> {
    return this.prisma.profile.update({
      where: { userId },
      data,
    });
  }
}

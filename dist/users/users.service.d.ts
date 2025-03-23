import { PrismaService } from '../prisma/prisma.service';
import { User, Profile } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private readonly prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    createUser(name: string, email: string, password: string): Promise<User>;
    getUserById(id: string): Promise<User | null>;
    login(email: string, password: string): Promise<{
        access_token: string;
        user_id: string;
    } | null>;
    logout(): Promise<{
        message: string;
    }>;
    resetPassword(email: string, newPassword: string): Promise<User>;
    getProfileByUserId(userId: string): Promise<Profile | null>;
    updateProfile(userId: string, data: Partial<Profile>): Promise<Profile>;
}

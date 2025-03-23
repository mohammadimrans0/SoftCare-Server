import { UsersService } from './users.service';
import { User, Profile } from '@prisma/client';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signup(name: string, email: string, password: string, role: string): Promise<User>;
    getUserById(id: string): Promise<User | null>;
    login(email: string, password: string): Promise<{
        access_token: string;
        user_id: string;
    }>;
    logout(): Promise<{
        message: string;
    }>;
    resetPassword(email: string, newPassword: string): Promise<User>;
    getProfileByUserId(userId: string): Promise<Profile | null>;
    updateProfile(userId: string, data: Partial<Profile>): Promise<Profile>;
}

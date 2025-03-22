// import { IsString, IsEmail, IsOptional, IsInt, IsEnum, IsPhoneNumber, IsMongoId } from 'class-validator';
// import { Prisma } from '@prisma/client';

// // User DTOs
// export class CreateUserDto {
//   @IsString()
//   name: string;

//   @IsEmail()
//   email: string;

//   @IsString()
//   password: string;

//   @IsOptional()
//   profile?: CreateProfileDto; // Optional, in case you want to create a profile at the same time
// }

// export class UpdateUserDto {
//   @IsOptional()
//   @IsString()
//   name?: string;

//   @IsOptional()
//   @IsEmail()
//   email?: string;

//   @IsOptional()
//   @IsString()
//   password?: string;

//   @IsOptional()
//   profile?: UpdateProfileDto; // Optional, for updating the profile
// }

// export class UserDto {
//   id: string;
//   name: string;
//   email: string;
//   profile?: ProfileDto;
//   createdAt: Date;
//   updatedAt: Date;
// }

// // Profile DTOs
// export class CreateProfileDto {
//   @IsMongoId()
//   userId: string;

//   @IsEnum(Prisma.Role)
//   role: Prisma.Role;

//   @IsOptional()
//   @IsInt()
//   age?: number;

//   @IsOptional()
//   @IsEnum(Prisma.Gender)
//   gender?: Prisma.Gender;

//   @IsOptional()
//   @IsString()
//   address?: string;

//   @IsOptional()
//   @IsPhoneNumber()
//   phone?: string;
// }

// export class UpdateProfileDto {
//   @IsOptional()
//   @IsEnum(Prisma.Role)
//   role?: Prisma.Role;

//   @IsOptional()
//   @IsInt()
//   age?: number;

//   @IsOptional()
//   @IsEnum(Prisma.Gender)
//   gender?: Prisma.Gender;

//   @IsOptional()
//   @IsString()
//   address?: string;

//   @IsOptional()
//   @IsPhoneNumber()
//   phone?: string;
// }

// export class ProfileDto {
//   id: string;
//   userId: string;
//   role: Prisma.Role;
//   age?: number;
//   gender?: Prisma.Gender;
//   address?: string;
//   phone?: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

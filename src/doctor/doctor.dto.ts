import { IsString, IsOptional, IsInt, IsPhoneNumber, IsMongoId } from 'class-validator';

export class CreateDoctorDto {
  @IsMongoId()
  userId: string;

  @IsString()
  specialty: string;

  @IsString()
  degree: string;

  @IsInt()
  experience: number;

  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;
}

export class UpdateDoctorDto {
  @IsOptional()
  @IsString()
  specialty?: string;

  @IsOptional()
  @IsString()
  degree?: string;

  @IsOptional()
  @IsInt()
  experience?: number;

  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;
}

export class DoctorDto {
  id: string;
  userId: string;
  specialty: string;
  degree: string;
  experience: number;
  phone?: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}

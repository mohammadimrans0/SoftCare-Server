// src/appointments/dto/appointment.dto.ts
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsDateString } from 'class-validator';
import { AppointmentStatus } from '@prisma/client';  // Ensure you import the AppointmentStatus enum from Prisma

export class CreateAppointmentDto {
  @IsNotEmpty()
  patientId: string;

  @IsNotEmpty()
  doctorId: string;

  @IsDateString()
  date: string;

  @IsString()
  @IsNotEmpty()
  schedule: string;

  @IsEnum(AppointmentStatus)
  @IsOptional()
  status: AppointmentStatus = AppointmentStatus.Pending;

  @IsString()
  @IsOptional()
  notes?: string;
}

export class UpdateAppointmentDto {
  @IsEnum(AppointmentStatus)
  @IsOptional()
  status?: AppointmentStatus;

  @IsString()
  @IsOptional()
  notes?: string;
}

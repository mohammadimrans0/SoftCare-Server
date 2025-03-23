// src/appointments/dto/appointment.dto.ts
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsDateString } from 'class-validator';
import { AppointmentStatus } from '@prisma/client';

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

  constructor(date: string, patientId: string, doctorId: string, schedule: string, status: AppointmentStatus, notes?: string) {
    this.date = date;
    this.patientId = patientId;
    this.doctorId = doctorId;
    this.schedule = schedule;
    this.status = status;
    this.notes = notes;
  }
}

export class UpdateAppointmentDto {
  @IsEnum(AppointmentStatus)
  @IsOptional()
  status?: AppointmentStatus;

  @IsString()
  @IsOptional()
  notes?: string;
}

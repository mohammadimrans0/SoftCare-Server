import { IsEnum, IsNotEmpty, IsOptional, IsString, IsDateString } from 'class-validator';
import { AppointmentStatus } from '@prisma/client'; 

// console.log('AppointmentStatus:', AppointmentStatus);

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

  // Ensure Prisma enum values are correctly used for validation
  @IsEnum(AppointmentStatus, { message: 'Invalid status value' })
  @IsOptional()
  status: AppointmentStatus = AppointmentStatus.Pending;

  @IsString()
  @IsOptional()
  notes?: string;

  constructor(
    date: string,
    patientId: string,
    doctorId: string,
    schedule: string,
    status: AppointmentStatus = AppointmentStatus.Pending, // Default to Pending
    notes?: string,
  ) {
    this.date = date;
    this.patientId = patientId;
    this.doctorId = doctorId;
    this.schedule = schedule;
    this.status = status;
    this.notes = notes;
  }
}

export class UpdateAppointmentDto {
  @IsEnum(AppointmentStatus, { message: 'Invalid status value' })
  @IsOptional()
  status?: AppointmentStatus;

  @IsString()
  @IsOptional()
  notes?: string;
}

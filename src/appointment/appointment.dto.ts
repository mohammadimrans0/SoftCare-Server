import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
} from 'class-validator';

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

  @IsString()
  @IsOptional()
  status: string = "Pending";

  @IsString()
  @IsOptional()
  notes?: string;

  constructor(
    date: string,
    patientId: string,
    doctorId: string,
    schedule: string,
    status: string = "Pending",
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
  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  notes?: string;
}

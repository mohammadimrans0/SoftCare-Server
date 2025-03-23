import { AppointmentStatus } from '@prisma/client';
export declare class CreateAppointmentDto {
    patientId: string;
    doctorId: string;
    date: string;
    schedule: string;
    status: AppointmentStatus;
    notes?: string;
    constructor(date: string, patientId: string, doctorId: string, schedule: string, status: AppointmentStatus, notes?: string);
}
export declare class UpdateAppointmentDto {
    status?: AppointmentStatus;
    notes?: string;
}

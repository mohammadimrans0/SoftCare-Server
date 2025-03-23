export declare class CreateAppointmentDto {
    patientId: string;
    doctorId: string;
    date: string;
    schedule: string;
    status: string;
    notes?: string;
    constructor(date: string, patientId: string, doctorId: string, schedule: string, status?: string, notes?: string);
}
export declare class UpdateAppointmentDto {
    status?: string;
    notes?: string;
}

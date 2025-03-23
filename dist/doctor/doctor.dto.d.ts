export declare class CreateDoctorDto {
    userId: string;
    specialty: string;
    degree: string;
    experience: number;
    phone?: string;
    address?: string;
    constructor(userId: string, specialty: string, degree: string, experience: number, phone?: string, address?: string);
}
export declare class UpdateDoctorDto {
    specialty?: string;
    degree?: string;
    experience?: number;
    phone?: string;
    address?: string;
}

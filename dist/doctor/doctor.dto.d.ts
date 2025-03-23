export declare class CreateDoctorDto {
    userId: string;
    specialty: string;
    degree: string;
    experience: number;
    phone?: string;
    address?: string;
}
export declare class UpdateDoctorDto {
    specialty?: string;
    degree?: string;
    experience?: number;
    phone?: string;
    address?: string;
}
export declare class DoctorDto {
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

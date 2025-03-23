import { CreateDoctorDto, UpdateDoctorDto } from './doctor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DoctorService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createDoctor(data: CreateDoctorDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        userId: string;
        specialty: string;
        degree: string;
        experience: number;
    }>;
    getDoctors(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        userId: string;
        specialty: string;
        degree: string;
        experience: number;
    }[]>;
    getDoctorById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        userId: string;
        specialty: string;
        degree: string;
        experience: number;
    } | null>;
    updateDoctor(id: string, data: UpdateDoctorDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        userId: string;
        specialty: string;
        degree: string;
        experience: number;
    }>;
    deleteDoctor(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        userId: string;
        specialty: string;
        degree: string;
        experience: number;
    }>;
}

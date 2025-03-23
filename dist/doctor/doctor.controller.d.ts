import { DoctorService } from './doctor.service';
import { CreateDoctorDto, UpdateDoctorDto } from './doctor.dto';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    create(createDoctorDto: CreateDoctorDto): Promise<{
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
    findAll(): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updateDoctorDto: UpdateDoctorDto): Promise<{
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
    remove(id: string): Promise<{
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

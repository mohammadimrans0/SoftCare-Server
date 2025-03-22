import { Injectable } from '@nestjs/common';
import { CreateDoctorDto, UpdateDoctorDto } from './doctor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DoctorService {
  constructor(private readonly prisma: PrismaService) {}

  async createDoctor(data: CreateDoctorDto) {
    return this.prisma.doctor.create({ data });
  }

  async getDoctors() {
    return this.prisma.doctor.findMany();
  }

  async getDoctorById(id: string) {
    return this.prisma.doctor.findUnique({ where: { id } });
  }

  async updateDoctor(id: string, data: UpdateDoctorDto) {
    return this.prisma.doctor.update({ where: { id }, data });
  }

  async deleteDoctor(id: string) {
    return this.prisma.doctor.delete({ where: { id } });
  }
}
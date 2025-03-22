// src/appointments/appointments.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAppointmentDto, UpdateAppointmentDto } from './appointment.dto';
import { Appointment } from '@prisma/client';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}

  async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    return this.prisma.appointment.create({
      data: {
        patientId: createAppointmentDto.patientId,
        doctorId: createAppointmentDto.doctorId,
        date: new Date(createAppointmentDto.date),
        schedule: createAppointmentDto.schedule,
        status: createAppointmentDto.status,
        notes: createAppointmentDto.notes,
      },
    });
  }

  async findAll(): Promise<Appointment[]> {
    return this.prisma.appointment.findMany();
  }

  async findOne(id: string): Promise<Appointment | null> {
    return this.prisma.appointment.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment> {
    return this.prisma.appointment.update({
      where: { id },
      data: {
        status: updateAppointmentDto.status,
        notes: updateAppointmentDto.notes,
      },
    });
  }

  async remove(id: string): Promise<Appointment> {
    return this.prisma.appointment.delete({
      where: { id },
    });
  }
}

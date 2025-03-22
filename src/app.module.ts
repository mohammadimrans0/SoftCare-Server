import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { DoctorModule } from './doctor/doctor.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [PrismaModule, UsersModule, DoctorModule, AppointmentModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}

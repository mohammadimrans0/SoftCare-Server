import { Controller, Post, Get, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto, UpdateDoctorDto } from './doctor.dto';
// import { AdminGuard } from '../guards/admin.guard';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
//   @UseGuards(AdminGuard)
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.createDoctor(createDoctorDto);
  }

  @Get()
  findAll() {
    return this.doctorService.getDoctors();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorService.getDoctorById(id);
  }

  @Put(':id')
//   @UseGuards(AdminGuard)
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorService.updateDoctor(id, updateDoctorDto);
  }

  @Delete(':id')
//   @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.doctorService.deleteDoctor(id);
  }
}


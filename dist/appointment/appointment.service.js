"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AppointmentService = class AppointmentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAppointmentDto) {
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
    async findAll() {
        return this.prisma.appointment.findMany();
    }
    async findOne(id) {
        return this.prisma.appointment.findUnique({
            where: { id },
        });
    }
    async update(id, updateAppointmentDto) {
        return this.prisma.appointment.update({
            where: { id },
            data: {
                status: updateAppointmentDto.status,
                notes: updateAppointmentDto.notes,
            },
        });
    }
    async remove(id) {
        return this.prisma.appointment.delete({
            where: { id },
        });
    }
};
exports.AppointmentService = AppointmentService;
exports.AppointmentService = AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppointmentService);
//# sourceMappingURL=appointment.service.js.map
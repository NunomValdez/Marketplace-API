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
exports.WarehousesService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../database/PrismaService");
let WarehousesService = class WarehousesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        console.log(this.prisma.warehouse);
        return this.prisma.warehouse.create({ data });
    }
    async findAll() {
        return this.prisma.warehouse.findMany();
    }
    async findOne(id) {
        return this.prisma.warehouse.findUnique({ where: { id } });
    }
    async update(id, data) {
        const warehouseExists = await this.prisma.warehouse.findUnique({ where: { id } });
        if (!warehouseExists) {
            throw new Error("Warehouse do not work with us, and for that does not exists no our database");
        }
        return this.prisma.warehouse.update({ data, where: { id } });
    }
    async remove(id) {
        return this.prisma.warehouse.delete({ where: { id } });
    }
};
WarehousesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], WarehousesService);
exports.WarehousesService = WarehousesService;
//# sourceMappingURL=warehouses.service.js.map
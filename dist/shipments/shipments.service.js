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
exports.ShipmentsService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../database/PrismaService");
let ShipmentsService = class ShipmentsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return await this.prisma.shipment.create({
            data: {
                from_address: data.from_address,
                to_address: data.to_address,
                order_id: data.to_address,
                user_id: data.user_id,
                product_id: data.product_id,
            },
        });
    }
    async findAll() {
        return await this.prisma.shipment.findMany();
    }
    async findOne(id) {
        return await this.prisma.shipment.findUnique({ where: { id } });
    }
    async update(id, data) {
        const shipmentExists = await this.prisma.shipment.findUnique({
            where: { id },
        });
        if (!shipmentExists) {
            throw new Error(" Shipment not found!");
        }
        return await this.prisma.shipment.update({ data, where: { id } });
    }
    async remove(id) {
        return await this.prisma.shipment.delete({ where: { id } });
    }
};
ShipmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], ShipmentsService);
exports.ShipmentsService = ShipmentsService;
//# sourceMappingURL=shipments.service.js.map
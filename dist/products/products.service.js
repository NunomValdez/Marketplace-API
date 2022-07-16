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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../database/PrismaService");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const procuctToCreate = await this.prisma.product.create({
            data: {
                name: data.name,
                order_id: data.order_id,
                warehouse_id: data.warehouse_id,
                quantity: data.quantity,
            },
        });
        return procuctToCreate;
    }
    async findAll() {
        return await this.prisma.product.findMany();
    }
    async findOne(id) {
        return await this.prisma.product.findFirst({ where: { id } });
    }
    async update(id, data) {
        const productExists = await this.prisma.product.findUnique({
            where: { id },
        });
        if (!productExists) {
            throw new Error("Product does not exists in DB");
        }
        return await this.prisma.product.update({
            data,
            where: { id },
        });
    }
    async remove(id) {
        return this.prisma.product.delete({ where: { id } });
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map
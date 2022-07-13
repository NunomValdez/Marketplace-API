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
        const product = await this.prisma.product.create({ data });
        return product;
    }
    async findAll() {
        return this.prisma.product.findMany();
    }
    async update(id, data) {
        const productExists = await this.prisma.product.findUnique({
            where: { id }
        });
        if (!productExists) {
            throw new Error('This product do not exist');
        }
        return await this.prisma.product.update({
            data, where: { id }
        });
    }
    async delete(id) {
        const productExists = await this.prisma.product.findUnique({
            where: { id }
        });
        if (!productExists) {
            throw new Error('This product do not exist');
        }
        return await this.prisma.product.delete({
            where: { id }
        });
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map
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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../database/PrismaService");
let OrdersService = class OrdersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const arrayOfProductId = data.products.reduce((acc, product) => {
            acc.push(product.id);
            return acc;
        }, []);
        const productToOrder = await this.prisma.product.findMany({
            where: {
                id: {
                    in: arrayOfProductId,
                },
            },
        });
        if (productToOrder.length === arrayOfProductId.length) {
            const productAssociations = data.products.map((product) => {
                return {
                    product_quantity: product.quantity,
                    products: {
                        connect: {
                            id: product.id,
                        },
                    },
                };
            });
            const productToCreate = await this.prisma.order.create({
                data: {
                    products: {
                        create: productAssociations,
                    },
                },
            });
        }
    }
    async findAll() {
        return this.prisma.order.findMany();
    }
    async findOne(id) {
        return this.prisma.order.findUnique({ where: { id } });
    }
    async update(id, data) {
        const orderExists = await this.prisma.order.findUniqueOrThrow({
            where: { id },
        });
        if (!orderExists) {
            throw new Error("This order does not exists");
        }
        const productsToUpdate = data.products.map((product) => {
            return {
                product_quantity: product.quantity,
                products: {
                    connect: {
                        id: product.id,
                    },
                },
            };
        });
        return await this.prisma.order.update({
            where: {
                id,
            },
            data: {
                shipment_id: data.shipment_id,
            },
        });
    }
    async remove(id) {
        return this.prisma.order.delete({ where: { id } });
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map
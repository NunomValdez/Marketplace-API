"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const PrismaService_1 = require("./database/PrismaService");
const shipments_module_1 = require("./shipments/shipments.module");
const orders_module_1 = require("./orders/orders.module");
const warehouses_module_1 = require("./warehouses/warehouses.module");
const products_module_1 = require("./products/products.module");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
console.log(prisma);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [shipments_module_1.ShipmentsModule, orders_module_1.OrdersModule, warehouses_module_1.WarehousesModule, products_module_1.ProductsModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, PrismaService_1.PrismaService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
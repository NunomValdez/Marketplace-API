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
const products_module_1 = require("./products/products.module");
const order_module_1 = require("./order/order.module");
const warehouse_module_1 = require("./warehouse/warehouse.module");
const shipment_module_1 = require("./shipment/shipment.module");
const order_controller_1 = require("./order/order.controller");
const warehouse_controller_1 = require("./warehouse/warehouse.controller");
const shipment_controller_1 = require("./shipment/shipment.controller");
const order_service_1 = require("./order/order.service");
const shipment_service_1 = require("./shipment/shipment.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [products_module_1.ProductsModule, shipment_module_1.ShipmentModule, warehouse_module_1.WarehouseModule, order_module_1.OrderModule],
        controllers: [app_controller_1.AppController, order_controller_1.OrderController, shipment_controller_1.ShipmentController, warehouse_controller_1.WarehouseController],
        providers: [app_service_1.AppService, shipment_service_1.ShipmentService, order_service_1.OrderService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
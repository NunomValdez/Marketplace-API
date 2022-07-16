"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentsModule = void 0;
const common_1 = require("@nestjs/common");
const shipments_service_1 = require("./shipments.service");
const shipments_controller_1 = require("./shipments.controller");
const PrismaService_1 = require("../database/PrismaService");
let ShipmentsModule = class ShipmentsModule {
};
ShipmentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [shipments_controller_1.ShipmentsController],
        providers: [shipments_service_1.ShipmentsService, PrismaService_1.PrismaService],
    })
], ShipmentsModule);
exports.ShipmentsModule = ShipmentsModule;
//# sourceMappingURL=shipments.module.js.map
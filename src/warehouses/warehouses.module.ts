import { Module } from "@nestjs/common";
import { WarehousesService } from "./warehouses.service";
import { WarehousesController } from "./warehouses.controller";
import { PrismaService } from "src/database/PrismaService";

@Module({
  controllers: [WarehousesController],
  providers: [WarehousesService, PrismaService],
})
export class WarehousesModule {}

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./database/PrismaService";
import { ShipmentsModule } from "./shipments/shipments.module";
import { OrdersModule } from "./orders/orders.module";
import { WarehousesModule } from "./warehouses/warehouses.module";
import { ProductsModule } from "./products/products.module";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

@Module({
  imports: [ShipmentsModule, OrdersModule, WarehousesModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

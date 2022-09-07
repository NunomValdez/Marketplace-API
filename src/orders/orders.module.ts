import { Module } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { OrdersController } from "./orders.controller";
import { PrismaService } from "src/database/PrismaService";
import { ProductsModule } from "src/products/products.module";

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService],
  imports: [ProductsModule],
})
export class OrdersModule {}

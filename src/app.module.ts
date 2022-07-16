import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./database/PrismaService";
import { ShipmentsModule } from "./shipments/shipments.module";
import { OrdersModule } from "./orders/orders.module";
import { WarehousesModule } from "./warehouses/warehouses.module";
import { ProductsModule } from "./products/products.module";


// const config: SqliteConnectionOptions = {
//   type: 'sqlite',
//   database:'file:./dev.db',
//   entities: [Order, Product, Warehouse, Shipment],
//   synchronize: true //tirar em producao!
// }

@Module({
  imports: [ShipmentsModule, OrdersModule, WarehousesModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

//, ShipmentsController, OrdersController, WarehousesController, ProductsController

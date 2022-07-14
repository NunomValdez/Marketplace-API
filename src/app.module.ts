import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/PrismaService';
import { ShipmentsModule } from './shipments/shipments.module';
import { OrdersModule } from './orders/orders.module';
import { WarehousesModule } from './warehouses/warehouses.module';
import { ProductsModule } from './products/products.module';
import { ShipmentsController } from './shipments/shipments.controller';
import { OrdersController } from './orders/orders.controller';
import { WarehousesController } from './warehouses/warehouses.controller';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [ ShipmentsModule, OrdersModule, WarehousesModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})


export class AppModule {}


//, ShipmentsController, OrdersController, WarehousesController, ProductsController
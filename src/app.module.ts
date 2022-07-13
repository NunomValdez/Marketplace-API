import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { ShipmentModule } from './shipment/shipment.module';
import { OrderController } from './order/order.controller';
import { WarehouseController } from './warehouse/warehouse.controller';
import { ShipmentController } from './shipment/shipment.controller';
import { OrderService } from './order/order.service';
import { ShipmentService } from './shipment/shipment.service';
import { PrismaService } from './database/PrismaService';

@Module({
  imports: [ProductsModule, ShipmentModule, WarehouseModule, OrderModule],
  controllers: [AppController, OrderController, ShipmentController, WarehouseController],
  providers: [AppService, ShipmentService, OrderService, PrismaService],
})


export class AppModule {}

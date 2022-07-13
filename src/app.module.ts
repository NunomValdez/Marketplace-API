import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrderController } from './order/order.controller';
import { ShipmentController } from './shipment/shipment.controller';
import { WarehouseController } from './warehouse/warehouse.controller';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, OrderController, ShipmentController, WarehouseController],
  providers: [AppService],
})
export class AppModule {}

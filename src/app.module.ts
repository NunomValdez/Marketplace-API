import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrderController } from './order/order.controller';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, OrderController],
  providers: [AppService],
})
export class AppModule {}

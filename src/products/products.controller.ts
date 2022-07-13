import { Body, Controller, Post } from '@nestjs/common';
import { ProductDTO } from './product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() data: ProductDTO){
    return this.productsService.create(data)
  }
}

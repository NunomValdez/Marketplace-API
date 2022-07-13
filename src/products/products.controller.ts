import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductDTO } from './product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() data: ProductDTO){
    return this.productsService.create(data)
  }

  @Get()
    async findAll(){
     return this.productsService.findAll()
    }

  @Put(':id')
    async update(@Param('id') id: string, @Body() data: ProductDTO){
      return this.productsService.update(id, data)
    }

  @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.productsService.delete(id)
    }

}

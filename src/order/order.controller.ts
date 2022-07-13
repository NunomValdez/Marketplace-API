import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrderDTO } from './order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor( private readonly orderService: OrderService) {}

    @Post()
        async create(@Body() data: OrderDTO){
            return this.orderService.create(data)
        }

    @Get()
    async findAll(){
        return this.orderService.findAll()
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: OrderDTO){
      return this.orderService.update(id, data)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.orderService.delete(id)
    }
}

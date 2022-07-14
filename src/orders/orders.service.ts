import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { runInThisContext } from 'vm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {

  constructor( private prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create( {createOrderDto })
  }

  async findAll() {
    return this.prisma.order.findAll()
  }

  async findOne(id: string) {
    return this.prisma.order.findOne({ where: {id}})
  }

  async update(id: string, data: UpdateOrderDto) {
    const orderExists = await this.prisma.order.findUnique({ where: {id}})
    //primeiro temos de ver se a order existe, 
    if(!orderExists){
      throw new Error('This order does not exists')
    }

    return this.prisma.order.update({data, where: {id}})
  }

  async remove(id: string) {
    return `This action removes a #${id} order`;
  }
}

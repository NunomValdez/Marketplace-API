import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

import { OrderDTO } from './order.dto';

@Injectable()
export class OrderService {

    constructor(private prisma: PrismaService) {}

    async create(data: OrderDTO){
        const order = await this.prisma.order.create({ data })
        return order
    }

    // Finding all orders 
    async findAll() {
        return this.prisma.order.findMany();
    }

// Updating one order 
    async update(id: string, data: OrderDTO) {
        const orderExists = await this.prisma.order.findUnique({
            where: { id }
        });
    //if order don't exists, throw an error
        if(!orderExists){ 
            throw new Error('This order do not exist');
        }
    // if the order exists, then update it:
      return  await this.prisma.order.update({
            data, where: { id }
        })
    }

    async delete(id: string) {
        const orderExists = await this.prisma.order.findUnique({
            where: { id }
        });
    //if order don't exists, throw an error
        if(!orderExists){ 
            throw new Error('This order do not exist');
        }
    // if the order exists, then update it:
      return  await this.prisma.order.delete({
            where: { id }
        })
    }

}

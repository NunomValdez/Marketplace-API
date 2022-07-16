import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { runInThisContext } from "vm";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";

@Injectable()
export class OrdersService {
  constructor( private prisma: PrismaService ) {}

  async create(data: CreateOrderDto) {
    return this.prisma.order.create({ 
      data:{      // isto n está a funcionar pq falta fazer a relacao many to many na bd => 
    user_id: data.user_id,
    shipment_id: data.shipment_id, 
    product_id : data.product_id
    }
   });
  }

  async findAll() {
    return this.prisma.order.findMany()
  }

  async findOne(id: string) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateOrderDto) {
    const orderExists = await this.prisma.order.findUnique({ where: { id } });
    //primeiro temos de ver se a order existe,
    if (!orderExists) {
      throw new Error("This order does not exists");
    }

    return this.prisma.order.update({ data, where: { id } });
  }

  async remove(id: string) {
    return this.prisma.order.delete({ where: { id } });
  }
}

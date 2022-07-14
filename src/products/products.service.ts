import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PrismaService } from "src/database/PrismaService";
import { Order } from "src/orders/entities/order.entity";
import { Shipment } from "src/shipments/entities/shipment.entity";
import { Warehouse } from "src/warehouses/entities/warehouse.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  //only an ADMIN user has the capability to create products on the system
  // a buyer user can create orders and ask for many products in the same or diferent order

  async create(data: CreateProductDto) {
    return await this.prisma.product.create({ data });
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.product.findFirst({ where: { id } });
  }

  async update(id: string, data: UpdateProductDto) {
    const productExists = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!productExists) {
      throw new Error("Product does not exists in DB");
    }

    return await this.prisma.product.update({
      data,
      where: { id },
    });
  }

  async remove(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}

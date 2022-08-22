import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  // only an ADMIN user has the capability to create products on the system
  // a buyer user can create orders and as for many products in the same or diferent order

  async create(data: CreateProductDto) {
    const procuctToCreate = await this.prisma.product.create({
      data: {
        // id: data.id, // n devia existir, porque nao queremos dar a possibilidade ao user de criar um id, mas sim dar essa responsabilidade ao prisma
        name: data.name,
        warehouse_id: data.warehouse_id,
        quantity: data.quantity,
        // ou ...CreateProductDto
      },
    });

    return procuctToCreate;
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
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.product.delete({ where: { id } });
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { CreateWarehouseDto } from "./dto/create-warehouse.dto";
import { UpdateWarehouseDto } from "./dto/update-warehouse.dto";

@Injectable()
export class WarehousesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateWarehouseDto) {
    return this.prisma.warehouse.create({
      data: {
        location: data.location,
        id: data.id,
      },
    });
  }

  async findAll() {
    return this.prisma.warehouse.findMany();
  }

  async findOne(id: string) {
    return this.prisma.warehouse.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateWarehouseDto) {
    const warehouseExists = await this.prisma.warehouse.findUnique({
      where: { id },
    });
    if (!warehouseExists) {
      throw new Error(
        "This warehouse does not work with us, and for that it does not exists in our database!"
      );
    }
    return this.prisma.warehouse.update({ data, where: { id } });
  }

  async remove(id: string) {
    return await this.prisma.warehouse.delete({ where: { id } });
  }
}

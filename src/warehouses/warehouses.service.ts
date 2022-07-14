import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { CreateWarehouseDto } from "./dto/create-warehouse.dto";
import { UpdateWarehouseDto } from "./dto/update-warehouse.dto";

@Injectable()
export class WarehousesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateWarehouseDto) {
    return this.prisma.warehouse.create({ data });
  }

  async findAll() {
    return this.prisma.warehouse.findAll();
  }

  async findOne(id: string) {
    return this.prisma.warehouse.findOne({ where: { id } });
  }

  async update(id: string, data: UpdateWarehouseDto) {
    const warehouseExists = await this.prisma.warehouse.findOne({ id });
    if (!warehouseExists) {
      throw new Error(
        "Warehouse do not work with us, and for that does not exists no our database"
      );
    }
    return this.prisma.warehouse.update({ data, where: { id } });
  }

  async remove(id: string) {
    return this.prisma.warehouse.delete({ where: { id } });
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { CreateShipmentDto } from "./dto/create-shipment.dto";
import { UpdateShipmentDto } from "./dto/update-shipment.dto";

@Injectable()
export class ShipmentsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateShipmentDto) {
    return await this.prisma.shipment.create({
      data: {
        from_address: data.from_address,
        to_address: data.to_address,
        order_id: data.to_address,
        delivered: data.delivered,
      },
    });
  }

  async findAll() {
    return await this.prisma.shipment.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.shipment.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateShipmentDto) {
    const shipmentExists = await this.prisma.shipment.findUnique({
      where: { id },
    });

    if (!shipmentExists) {
      throw new Error(" Shipment not found!");
    }
    return await this.prisma.shipment.update({ data, where: { id } });
  }

  async remove(id: string) {
    return await this.prisma.shipment.delete({ where: { id } });
  }
}

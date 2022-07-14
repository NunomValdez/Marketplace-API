import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';

@Injectable()
export class ShipmentsService {

  constructor( private prisma:PrismaService ) {}

 async create( data: CreateShipmentDto) {
    return await this.prisma.shipment.create({ data })
  }

 async findAll() {
    return await this.prisma.shipment.findAll()
  }

 async findOne(id: string) {
    return await this.prisma.shipment.findOne({ where: {id} })
  }

 async update(id: string, data: UpdateShipmentDto) {

  const shipmentExists = await this.prisma.shipment.findOne({id})
  
  if(!shipmentExists){
    throw new Error(' Shipment not found!')
  }
    return await this.prisma.shipment.update({data, where: {id} })
  }

 async remove(id: string) {
    return await this.prisma.shipment.remove({ where: {id}})
  }
}

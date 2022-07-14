import { Injectable } from '@nestjs/common';
import { getPrismaClient } from '@prisma/client/runtime';
import { throwError } from 'rxjs';
import { PrismaService } from 'src/database/PrismaService';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {

  constructor( private prisma: PrismaService){}

 async create( data: CreateProductDto ) {
  return await this.prisma.product.create({ data })
  }

  async findAll() {
   return await this.prisma.product.findMany()
  }

  async findOne(id: string) {
    return await  this.prisma.product.findFirst({ where: {id} })
  }

  async update(id: string, data: UpdateProductDto) {

   const productExists = await this.prisma.product.findUnique({ where: {id,}})
      if(!productExists){
        throw new Error('Product does not exists in DB')
      }
      
      return await this.prisma.product.update({
        data,
        where: {id,}
      })

  }

  async remove(id: string) {
    return this.prisma.product.findFirst({where: {id}})
  }
}

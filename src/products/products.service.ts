import { Injectable, Param } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductsService {

    constructor( private prisma: PrismaService){}

// Creating a new Product 
    async create(data: ProductDTO ) {
        // const productExists = await this.prisma.product.findFirst({
        //     where: {
        //         id : data.id
        //     }
        // })

        // se o produto nao existir, retorna um erro,
        // if(productExists){
        //     throw new Error('product already exists');
        // }
        //se existir, guarda o produto na BD
       const product = await this.prisma.product.create({ data }) 
        return product
    }
// Finding all products 
    async findAll() {
        return this.prisma.product.findMany();
    }

// Updating one product 
    async update(id: string, data: ProductDTO) {
        const productExists = await this.prisma.product.findUnique({
            where: { id }
        });
    //if product don't exists, throw an error
        if(!productExists){ 
            throw new Error('This product do not exist');
        }
    // if the product exists, then update it:
      return  await this.prisma.product.update({
            data, where: { id }
        })
    }

    async delete(id: string) {
        const productExists = await this.prisma.product.findUnique({
            where: { id }
        });
    //if product don't exists, throw an error
        if(!productExists){ 
            throw new Error('This product do not exist');
        }
    // if the product exists, then update it:
      return  await this.prisma.product.delete({
            where: { id }
        })
    }

}

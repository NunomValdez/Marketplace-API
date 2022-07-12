import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductsService {

    constructor( private prisma: PrismaService){}

    async create(data: ProductDTO ) {

        const productExists = await this.prisma.product.findFirst({
            where: {
                id : data.id
            }
        })

        if(productExists){
            throw new Error('product already exists');
        }

       const product = await this.prisma.product.create({
            data,
        });
        
        return product
    }
}

import { PrismaService } from 'src/database/PrismaService';
import { ProductDTO } from './product.dto';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: ProductDTO): Promise<import(".prisma/client").Product>;
}

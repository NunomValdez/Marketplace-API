import { PrismaService } from 'src/database/PrismaService';
import { ProductDTO } from './product.dto';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: ProductDTO): Promise<import(".prisma/client").Product>;
    findAll(): Promise<import(".prisma/client").Product[]>;
    update(id: string, data: ProductDTO): Promise<import(".prisma/client").Product>;
    delete(id: string): Promise<import(".prisma/client").Product>;
}

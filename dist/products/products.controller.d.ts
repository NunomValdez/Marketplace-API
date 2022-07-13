import { ProductDTO } from './product.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(data: ProductDTO): Promise<import(".prisma/client").Product>;
    findAll(): Promise<import(".prisma/client").Product[]>;
    update(id: string, data: ProductDTO): Promise<import(".prisma/client").Product>;
    delete(id: string): Promise<import(".prisma/client").Product>;
}

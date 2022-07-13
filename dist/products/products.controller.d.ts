import { ProductDTO } from './product.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(data: ProductDTO): Promise<import(".prisma/client").Product>;
}

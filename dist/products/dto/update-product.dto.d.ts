import { CreateProductDto } from "./create-product.dto";
declare const UpdateProductDto_base: import("@nestjs/common").Type<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    id?: string;
    name: string;
    warehouse_id?: string;
    order_id?: string;
    quantity: number;
}
export {};

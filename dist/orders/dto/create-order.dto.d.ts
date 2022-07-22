import { OrderProductDto } from "./order-product.dto";
export declare class CreateOrderDto {
    products: OrderProductDto[];
    shipment_id?: string;
}

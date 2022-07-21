import { OrderProduct } from "../types/orderProduct.type";
export declare class CreateOrderDto {
    products?: OrderProduct[];
    shipment_id?: string;
}

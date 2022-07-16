import { CreateShipmentDto } from "./create-shipment.dto";
declare const UpdateShipmentDto_base: import("@nestjs/common").Type<Partial<CreateShipmentDto>>;
export declare class UpdateShipmentDto extends UpdateShipmentDto_base {
    id?: string;
    from_address: string;
    to_address: string;
    order_id: string;
    user_id: string;
    product_id: string;
}
export {};

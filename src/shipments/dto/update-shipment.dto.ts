import { PartialType } from "@nestjs/swagger";
import { CreateShipmentDto } from "./create-shipment.dto";

export class UpdateShipmentDto extends PartialType(CreateShipmentDto) {
    id?:            string;
    from_address:   string;
    to_address:     string;
    order_id:       string;
    user_id:        string;
    product_id:     string;
}

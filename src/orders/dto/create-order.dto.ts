import { ApiProperty } from "@nestjs/swagger";
import { OrderProduct } from "../types/orderProduct.type";

export class CreateOrderDto {
  @ApiProperty()
  products: OrderProduct[];

  @ApiProperty()
  shipment_id?: string;

  // @ApiProperty()
  // quantity: Number;
}

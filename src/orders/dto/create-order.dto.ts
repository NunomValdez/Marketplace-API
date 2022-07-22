import { ApiProperty } from "@nestjs/swagger";
import { OrderProductDto } from "./order-product.dto";

export class CreateOrderDto {
  @ApiProperty()
  products: OrderProductDto[];

  @ApiProperty()
  shipment_id?: string;
}

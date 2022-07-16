import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
  @ApiProperty()
  // {example:"kokokook"}
  user_id?: string;

  @ApiProperty()
  product_id: string;

  @ApiProperty()
  shipment_id: string;
  // id?:              string;
  // createdAt:        string;
}

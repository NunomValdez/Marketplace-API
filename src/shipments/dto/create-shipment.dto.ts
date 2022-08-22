import { ApiProperty } from "@nestjs/swagger";

export class CreateShipmentDto {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  from_address: string;
  //this as to be the warehouse id, cause the product is shipped always from a warehouse

  @ApiProperty()
  to_address: string;

  @ApiProperty()
  order_id: string;

  @ApiProperty()
  delivered?: boolean;
}

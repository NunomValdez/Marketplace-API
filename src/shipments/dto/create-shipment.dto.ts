import { ApiProperty } from "@nestjs/swagger";

export class CreateShipmentDto {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  from_address: string;

  @ApiProperty()
  to_address: string;

  @ApiProperty()
  order_id: string;

  @ApiProperty()
  delivered?: boolean;
}

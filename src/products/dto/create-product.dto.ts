import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  warehouse_id?: string;

  @ApiProperty()
  order_id?: string;

  @ApiProperty()
  quantity: number;
}

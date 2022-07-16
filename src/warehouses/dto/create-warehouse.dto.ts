import { ApiProperty } from "@nestjs/swagger";

export class CreateWarehouseDto {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  delivered: Boolean;
}

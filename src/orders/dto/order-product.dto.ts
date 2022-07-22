import { ApiProperty } from "@nestjs/swagger";

export class OrderProductDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  quantity: number;
}

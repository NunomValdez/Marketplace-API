import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  // @ApiProperty()
  // id: string; // n devia existir este campo, pq o user n deveria ter a hipotese de criar um ID, e sim só a BD

  @ApiProperty()
  name: string;

  @ApiProperty()
  warehouse_id?: string;

  @ApiProperty()
  quantity: number;
}

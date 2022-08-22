import { ApiProperty } from "@nestjs/swagger";

export class OrderProductDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  quantity: number;
}

// define associacoes entre produtos e orders

// nome meh, devia ser mais ProductsOrdersAssociation

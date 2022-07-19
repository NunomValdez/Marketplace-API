import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { OrderProduct } from "../types/orderProduct.type";

export class CreateOrderDto {
  //  implements Prisma.OrderCreateInput
  // id?: string;

  // @ApiProperty()
  // shipment: Prisma.ShipmentCreateNestedOneWithoutOrderInput;

  // @ApiProperty()
  // products?: Prisma.ProductsOrdersCreateNestedManyWithoutOrderInput;

  @ApiProperty()
  products: OrderProduct[];

  @ApiProperty()
  shipment_id?: string;

  // id?:              string;
  // createdAt:        string;
}

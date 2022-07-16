import { Order, Warehouse } from "@prisma/client";

export class CreateProductDto {
  id?: string;
  name: string;
  warehouse_id? : string;
  order_id?  : string;
  quantity: number;
}

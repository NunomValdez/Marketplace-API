import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateOrderDto) {
    //array of products id's from data - map returns a new array, of products to order in this case
    const arrayOfProductId = data.products.map((product) => {
      return product.id;
    });

    //finding all ordered products, in products table
    const productToOrder = await this.prisma.product.findMany({
      where: {
        id: {
          in: arrayOfProductId,
        },
      },
    });

    //Create an order only IF the length of productToOrder is equal to the arrayOfProductId
    if (productToOrder.length === arrayOfProductId.length) {
      const productAssociations = data.products.map((product) => {
        return {
          product_quantity: product.quantity,
          products: {
            connect: {
              id: product.id,
            },
          },
        };
      });

      // append the products associations to the create method
      return await this.prisma.order.create({
        data: {
          products: {
            create: productAssociations,
          },
        },
      });
    } else {
      throw new Error("The product does not exist"); // the order could not be done cause there's no produts in stock, for example
    }
  }

  async findAll() {
    return this.prisma.order.findMany();
  }

  async findOne(id: string) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateOrderDto) {
    const orderExists = await this.prisma.order.findUnique({
      where: { id },
    });

    if (!orderExists) {
      throw new Error("This order does not exists");
    }

    return await this.prisma.order.update({
      where: {
        id,
      },
      data: {
        shipment_id: data.shipment_id,
      },
    });
  }

  async remove(id: string) {
    await this.prisma.order.delete({
      where: { id },
    });
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateOrderDto) {
    const arrayOfProductId = data.products.map((product) => product.id);
    //devolte um array com os ID's de cada produto

    //com o array de ID's, vamos achar todos os produtos q têm o ID respectivo
    const productToOrder = await this.prisma.product.findMany({
      where: {
        id: {
          in: arrayOfProductId,
        },
      },
    });
    //se o tamanho do array de produtos achasdos na DB, for igual ao tamanho do array de ID's que queremos, entao temos de criar as orders com os respectivos ID's:
    if (productToOrder.length === arrayOfProductId.length) {
      const productAssociations = data.products.map((product) => {
        return {
          product_quantity: product.quantity,
          product: {
            connect: {
              id: product.id,
            },
          },
        };
      });

      const productToCreate = await this.prisma.order.create({
        data: {
          products: {
            create: productAssociations,
          },
        },
      });
      return productToCreate;
      // await Promise.all(
      //   data.products.map(async (product) => {
      //     await this.prisma.order.create({
      //       data: {
      //         products: {
      //           connect: {
      //             id: product.id,
      //           },
      //         },
      //         shipment: {
      //           connect: {
      //             id: data.shipment_id,
      //           },
      //         },
      //       },
      //     });
      //   })
      // );
      // return productToOrder;

      // return new Error("Invalid products");
    }
  }

  async findAll() {
    return this.prisma.order.findMany();
  }

  async findOne(id: string) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateOrderDto) {
    const orderExists = await this.prisma.order.findUnique({ where: { id } });
    //primeiro temos de ver se a order existe,
    if (!orderExists) {
      throw new Error("This order does not exists");
    }

    return this.prisma.order.update({
      where: {
        id,
      },
      data: {
        products: { set: data.products },
        shipment_id: data.shipment_id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.order.delete({ where: { id } });
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateOrderDto) {
    // const arrayOfProductId = data.products.map((product) => {
    //   return product.id;
    // });
    const arrayOfProductId = data.products.reduce((acc, product) => {
      acc.push(product.id);
      return acc;
    }, []);

    const productToOrder = await this.prisma.product.findMany({
      where: {
        id: {
          in: arrayOfProductId,
        },
      },
    });

    //se o tamanho do array de produtos achasdos na DB, for igual ao tamanho do array de ID's que queremos, entao temos de criar as orders com os respectivos ID's:

    if (productToOrder.length === arrayOfProductId.length) {
      //making the update of product_quantity, to alter products table (not here, later)
      const updatedProductQuantity = productToOrder.map((product) => {
        data.products.map((objeto) => {
          if (product.id === objeto.id) {
            if (objeto.quantity > product.quantity) {
              return "Unsuficient product quantity";
            }
            product.quantity = product.quantity - objeto.quantity;
          }
        });
      });

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

      return await this.prisma.order.create({
        data: {
          products: {
            create: productAssociations,
          },
          shipment_id: data.shipment_id,
        },
      });

      // const quantityUpdate = await this.prisma.product.updateMany({
      //   where:{ id },
      //   data:{
      //     quantity:{
      //       decrement: updatedProductQuantity
      //     }
      //   }
      //   }
    }
  }

  async findAll() {
    return this.prisma.order.findMany();
  }

  async findOne(id: string) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateOrderDto) {
    const orderExists = await this.prisma.order.findUniqueOrThrow({
      where: { id },
    });
    //primeiro temos de ver se a order existe,
    if (!orderExists) {
      throw new Error("This order does not exists");
    }

    const productsToUpdate = data.products.map((product) => {
      return {
        product_quantity: product.quantity,
        products: {
          connect: {
            id: product.id,
          },
        },
      };
    });

    return await this.prisma.order.update({
      where: {
        id,
      },
      data: {
        shipment_id: data.shipment_id,
      },
    });
    // products: data.products,  falta perceber este erro! a tabela productsOrders é onde está o array de products q queremos actualizar, pq o orders n tem produtos no schema, mas o orderproducts ja tem
    // shipment_id: data.shipment_id,
  }

  async remove(id: string) {
    return this.prisma.order.delete({ where: { id } });
  }
}

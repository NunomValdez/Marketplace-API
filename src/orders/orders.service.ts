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
    }); //payload

    //finding all ordered products in products table
    const productToOrderInDB = await this.prisma.product.findMany({
      where: {
        id: {
          in: arrayOfProductId, //verifica se os prods pedidos existem na BD
        },
      },
    });

    //Create an order only IF the length of productToOrderInDB is equal to the arrayOfProductId
    if (productToOrderInDB.length === arrayOfProductId.length) {
      const productAssociations = data.products.map((product) => {
        return {
          product_quantity: product.quantity,
          product_id: product.id,
        };
      });

      const orderToCreate = await this.prisma.order.create({
        data: {
          products: {
            create: productAssociations,
          },
        },
      });

      //para cada produto pedido existente na DB
      for (let i = 0; i < productToOrderInDB.length; ++i) {
        const quantityOfProductsInDb = data.products.find(
          (prod) => prod.id === productToOrderInDB[i].id
        ).quantity;

        const rightAmountOfProductsLeftDb =
          productToOrderInDB[i].quantity - quantityOfProductsInDb;

        await this.prisma.product.update({
          where: {
            id: productToOrderInDB[i].id,
          },
          data: {
            quantity: rightAmountOfProductsLeftDb,
          },
        });
      }

      return orderToCreate;
    } else {
      throw new Error("The product does not exist"); // the order could not be done cause there's no produts in stock, for example
    }
  }

  async findAll() {
    return this.prisma.order.findMany();
  }

  async findOne(id: string) {
    return this.prisma.order.findUnique({
      where: {
        id,
      },
      include: { products: true },
    });
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
    //  const elementToRemove = await this.prisma.order.findUnique({where: {id}})
    await this.prisma.order.delete({
      where: {
        id,
      },
    });
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateOrderDto) {
    const arrayOfProductId = data.products.reduce((acc, product) => {
      acc = [...acc, product.id]; // mesmo que acc.push(product.id)
      return acc;
    }, []); //devolte um array com os ID's de cada produto

    //com o array de ID's, vamos achar todos os produtos q têm o ID respectivo
    const productToOrder = await this.prisma.product.findMany({
      where: {
        id: {
          in: arrayOfProductId,
        },
      },
    });
    //se o tamanho do array de produtos achasdos na BB, for igual ao tamanho do array de ID's que queremos, entao temos de criar as orders com os respectivos ID's:
    if (productToOrder.length === arrayOfProductId.length) {
      const idProduto = data.products.map((product) => {
        return {
          product: {
            connect: {
              id: product.id,
            },
          },
        };
      });

      // //no array de produtos, idProduto, vamos a cada 1 dos elementos, q é um id, e retiramos esse valor:
      //      const productRespectivId =  idProduto.forEach(idElement =>{
      //         product:{
      //           connect:{
      //             id: idElement
      //           }
      //         }
      //       })
      // const produtoComID = idProduto.map((produto) => {
      //  return {
      //   connect: {
      //     id : produto
      //   }
      //  }
      // });
      console.log(idProduto);
      const productToCreate = await this.prisma.order.create({
        data: {
          //ver qual o erro q está neste data, nao entendo
          // shipment: data.shipment_id,
          products: {
            connect: {
              id: idProduto,
            },
          },
        },
      });
    }
  }
  // else {
  //   return "There are not products to order";
  // }

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

    return this.prisma.order.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.order.delete({ where: { id } });
  }
}

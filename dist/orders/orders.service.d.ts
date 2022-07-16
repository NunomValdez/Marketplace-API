import { PrismaService } from "src/database/PrismaService";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
export declare class OrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateOrderDto): Promise<import(".prisma/client").order>;
    findAll(): Promise<import(".prisma/client").order[]>;
    findOne(id: string): Promise<import(".prisma/client").order>;
    update(id: string, data: UpdateOrderDto): Promise<import(".prisma/client").order>;
    remove(id: string): Promise<import(".prisma/client").order>;
}

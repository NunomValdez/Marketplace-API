import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(data: CreateOrderDto): Promise<import(".prisma/client").order>;
    findAll(): Promise<import(".prisma/client").order[]>;
    findOne(id: string): Promise<import(".prisma/client").order>;
    update(id: string, data: UpdateOrderDto): Promise<import(".prisma/client").order>;
    remove(id: string): Promise<import(".prisma/client").order>;
}

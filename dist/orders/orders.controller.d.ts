import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(data: CreateOrderDto): Promise<void>;
    findAll(): Promise<import(".prisma/client").Order[]>;
    findOne(id: string): Promise<import(".prisma/client").Order>;
    update(id: string, data: UpdateOrderDto): Promise<import(".prisma/client").Order>;
    remove(id: string): Promise<import(".prisma/client").Order>;
}

import { OrderDTO } from './order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(data: OrderDTO): Promise<any>;
    findAll(): Promise<any>;
    update(id: string, data: OrderDTO): Promise<any>;
    delete(id: string): Promise<any>;
}

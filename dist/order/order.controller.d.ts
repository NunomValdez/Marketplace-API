import { OrderDTO } from './order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(data: OrderDTO): Promise<any>;
}

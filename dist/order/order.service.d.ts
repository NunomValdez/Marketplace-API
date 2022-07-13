import { PrismaService } from 'src/database/PrismaService';
import { OrderDTO } from './order.dto';
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: OrderDTO): Promise<any>;
    findAll(): Promise<any>;
    update(id: string, data: OrderDTO): Promise<any>;
    delete(id: string): Promise<any>;
}

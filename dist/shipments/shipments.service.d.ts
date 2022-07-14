import { PrismaService } from 'src/database/PrismaService';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
export declare class ShipmentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateShipmentDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, data: UpdateShipmentDto): Promise<any>;
    remove(id: string): Promise<any>;
}

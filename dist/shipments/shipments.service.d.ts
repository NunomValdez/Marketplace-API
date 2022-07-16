import { PrismaService } from "src/database/PrismaService";
import { CreateShipmentDto } from "./dto/create-shipment.dto";
import { UpdateShipmentDto } from "./dto/update-shipment.dto";
export declare class ShipmentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateShipmentDto): Promise<import(".prisma/client").Shipment>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, data: UpdateShipmentDto): Promise<import(".prisma/client").Shipment>;
    remove(id: string): Promise<import(".prisma/client").Shipment>;
}

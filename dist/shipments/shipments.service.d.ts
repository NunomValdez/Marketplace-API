import { PrismaService } from "src/database/PrismaService";
import { CreateShipmentDto } from "./dto/create-shipment.dto";
import { UpdateShipmentDto } from "./dto/update-shipment.dto";
export declare class ShipmentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateShipmentDto): Promise<import(".prisma/client").shipment>;
    findAll(): Promise<import(".prisma/client").shipment[]>;
    findOne(id: string): Promise<import(".prisma/client").shipment>;
    update(id: string, data: UpdateShipmentDto): Promise<import(".prisma/client").shipment>;
    remove(id: string): Promise<import(".prisma/client").shipment>;
}

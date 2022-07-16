import { ShipmentsService } from "./shipments.service";
import { CreateShipmentDto } from "./dto/create-shipment.dto";
import { UpdateShipmentDto } from "./dto/update-shipment.dto";
export declare class ShipmentsController {
    private readonly shipmentsService;
    constructor(shipmentsService: ShipmentsService);
    create(createShipmentDto: CreateShipmentDto): Promise<import(".prisma/client").shipment>;
    findAll(): Promise<import(".prisma/client").shipment[]>;
    findOne(id: string): Promise<import(".prisma/client").shipment>;
    update(id: string, updateShipmentDto: UpdateShipmentDto): Promise<import(".prisma/client").shipment>;
    remove(id: string): Promise<import(".prisma/client").shipment>;
}

import { ShipmentsService } from "./shipments.service";
import { CreateShipmentDto } from "./dto/create-shipment.dto";
import { UpdateShipmentDto } from "./dto/update-shipment.dto";
export declare class ShipmentsController {
    private readonly shipmentsService;
    constructor(shipmentsService: ShipmentsService);
    create(createShipmentDto: CreateShipmentDto): Promise<import(".prisma/client").Shipment>;
    findAll(): Promise<import(".prisma/client").Shipment[]>;
    findOne(id: string): Promise<import(".prisma/client").Shipment>;
    update(id: string, updateShipmentDto: UpdateShipmentDto): Promise<import(".prisma/client").Shipment>;
    remove(id: string): Promise<import(".prisma/client").Shipment>;
}

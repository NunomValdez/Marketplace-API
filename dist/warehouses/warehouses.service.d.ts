import { PrismaService } from "src/database/PrismaService";
import { CreateWarehouseDto } from "./dto/create-warehouse.dto";
import { UpdateWarehouseDto } from "./dto/update-warehouse.dto";
export declare class WarehousesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateWarehouseDto): Promise<import(".prisma/client").Warehouse>;
    findAll(): Promise<import(".prisma/client").Warehouse[]>;
    findOne(id: string): Promise<import(".prisma/client").Warehouse>;
    update(id: string, data: UpdateWarehouseDto): Promise<import(".prisma/client").Warehouse>;
    remove(id: string): Promise<import(".prisma/client").Warehouse>;
}

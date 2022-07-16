import { PrismaService } from "src/database/PrismaService";
import { CreateWarehouseDto } from "./dto/create-warehouse.dto";
import { UpdateWarehouseDto } from "./dto/update-warehouse.dto";
export declare class WarehousesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateWarehouseDto): Promise<import(".prisma/client").warehouse>;
    findAll(): Promise<import(".prisma/client").warehouse[]>;
    findOne(id: string): Promise<import(".prisma/client").warehouse>;
    update(id: string, data: UpdateWarehouseDto): Promise<import(".prisma/client").warehouse>;
    remove(id: string): Promise<import(".prisma/client").warehouse>;
}

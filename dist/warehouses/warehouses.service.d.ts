import { PrismaService } from "src/database/PrismaService";
import { CreateWarehouseDto } from "./dto/create-warehouse.dto";
import { UpdateWarehouseDto } from "./dto/update-warehouse.dto";
export declare class WarehousesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateWarehouseDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, data: UpdateWarehouseDto): Promise<any>;
    remove(id: string): Promise<any>;
}

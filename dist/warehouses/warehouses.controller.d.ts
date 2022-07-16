import { WarehousesService } from "./warehouses.service";
import { CreateWarehouseDto } from "./dto/create-warehouse.dto";
import { UpdateWarehouseDto } from "./dto/update-warehouse.dto";
export declare class WarehousesController {
    private readonly warehousesService;
    constructor(warehousesService: WarehousesService);
    create(createWarehouseDto: CreateWarehouseDto): Promise<import(".prisma/client").warehouse>;
    findAll(): Promise<import(".prisma/client").warehouse[]>;
    findOne(id: string): Promise<import(".prisma/client").warehouse>;
    update(id: string, updateWarehouseDto: UpdateWarehouseDto): Promise<import(".prisma/client").warehouse>;
    remove(id: string): Promise<import(".prisma/client").warehouse>;
}

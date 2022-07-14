import { INestApplication, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    private _order;
    get order(): any;
    set order(value: any);
    private _warehouse;
    get warehouse(): any;
    set warehouse(value: any);
    private _shipment;
    get shipment(): any;
    set shipment(value: any);
    onModuleInit(): Promise<void>;
    enableShutdownHooks(app: INestApplication): Promise<void>;
}

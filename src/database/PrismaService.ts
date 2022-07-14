import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Injectable()

export class PrismaService extends PrismaClient implements OnModuleInit {
  
  private _order: any;
  public get order(): any {
    return this._order;
  }
  public set order(value: any) {
    this._order = value;
  }
  private _warehouse: any;
  public get warehouse(): any {
    return this._warehouse;
  }
  public set warehouse(value: any) {
    this._warehouse = value;
  }
  private _shipment: any;
  public get shipment(): any {
    return this._shipment;
  }
  public set shipment(value: any) {
    this._shipment = value;
  }
  async onModuleInit() {
    await this.$connect();
  }


  

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
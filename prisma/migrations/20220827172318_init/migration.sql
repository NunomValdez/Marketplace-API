-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "warehouse_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "Products_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "Warehouses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shipment_id" TEXT,
    CONSTRAINT "Orders_shipment_id_fkey" FOREIGN KEY ("shipment_id") REFERENCES "Shipments" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderToProduct" (
    "order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "product_quantity" INTEGER NOT NULL,

    PRIMARY KEY ("order_id", "product_id"),
    CONSTRAINT "OrderToProduct_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderToProduct_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Orders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Shipments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_address" TEXT NOT NULL,
    "to_address" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "delivered" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Warehouses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "location" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_id_key" ON "Products"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_id_key" ON "Orders"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_shipment_id_key" ON "Orders"("shipment_id");

-- CreateIndex
CREATE UNIQUE INDEX "Shipments_id_key" ON "Shipments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Warehouses_id_key" ON "Warehouses"("id");

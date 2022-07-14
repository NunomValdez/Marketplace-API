-- CreateTable
CREATE TABLE "warehouse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "location" TEXT NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "order" (
    "product_id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "shipment_id" TEXT NOT NULL,
    "order_number" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Shipment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_address" TEXT NOT NULL,
    "to_address" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "warehouse_id_key" ON "warehouse"("id");

-- CreateIndex
CREATE UNIQUE INDEX "order_product_id_key" ON "order"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "Shipment_id_key" ON "Shipment"("id");

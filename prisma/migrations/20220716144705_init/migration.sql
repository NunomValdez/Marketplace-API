-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "warehouse_id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "products_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "products_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "warehouse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "shipment_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    CONSTRAINT "order_shipment_id_fkey" FOREIGN KEY ("shipment_id") REFERENCES "shipment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "shipment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_address" TEXT NOT NULL,
    "to_address" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "delivered" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "warehouse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "location" TEXT NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "products_id_key" ON "products"("id");

-- CreateIndex
CREATE UNIQUE INDEX "order_id_key" ON "order"("id");

-- CreateIndex
CREATE UNIQUE INDEX "order_user_id_key" ON "order"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "shipment_id_key" ON "shipment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "warehouse_id_key" ON "warehouse"("id");

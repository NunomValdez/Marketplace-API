# Marketplace API

In this project, you can find a **REST API** made in NodeJS, using NestJS as framework, Prisma as ORM, leveraging a SQL database - SQLite - as means of storing the data.

As desired, here you can make a CRUD - **C**reate, **R**ead, **U**pdate and/or **D**elete products, orders, warehouses and shipments.

---

### Getting started

**Note:** You need to have NodeJS installed in your system.

- Download the Git repository to your machine;
- You have to create a .env file, and put this variable: DATABASE_URL="file:./dev.db", or in the schema.prisma you can write '"file:./dev.db"' in the url parameter.
- Run the command "npm install" in the terminal, in the project folder;

---

### Run the Project

There are some choices to run this App:

- Swagger:

  - Run the following command in the terminal: "npm run start";
  - In the browser, go to "http://localhost:3000/api"

- Prisma Studio:

  - Run the following command in the terminal: "npx prisma studio" - this command will automatically open a window in your browser

- Insomnia / Postman:
  - Run the command "npm run start" in the terminal.

**Important NOTE :** In Swagger, the order DTO is incorrect - it's suposed to receive an object with two properties (id and quantity), and in swagger the automatic DTO tells us that "products" is an Array of strings.

## Endpoints

In this App, you have the following Endpoints:

### Warehouses

**Data example:**

```
{
    "location": "Taiwan"
}
```

### Products

**Data example:**

```
{
	"name": "Blue Jeans",
	"warehouse_id":"cc19cfb9-ac0e-42d1-b48d-49b1318d400d",
	"quantity": 15
}
```

### Orders

**Data example:**

```
{
  "products": [
        {
            "id": "c00eb2e7-9ad8-47b0-823c-0a982ec2b734",
            "quantity": 2
        },
        {
            "id": "159f323f-0404-4423-9fc8-9bf7032ecb99",
            "quantity": 1
        }
	],
  "shipment_id": "84adde9e-74db-4a0c-980b-f8a1e0da2eb6"
}
```

**Important Note:** You have to provide this object structure to make the create, and/or update Orders!

### Shipments

**Data exaple:**

```
{
    "from_address": "Taiwan",
    "to_address": "leiria",
    "order_id": "5700cdda-b00f-4961-9116-a65d2817c5c8",
    "delivered": true
}
```

---

**Important:** It's important you follow this Endpoint's order, to make a functional CRUD.

1- **Warehouses** - So we can associate a product with a warehouse;

2- **Products** - This way we can create products, and relate them to a warehouse;

3- **Orders** - We can create an Order, and associate it with the array of products;

4- **Shipments** - This way we can relate a "from" and a "to" address, associate it with an order and also know if it was delivered or not.

- **Note:** If you delete a shipment, the order shipment_id will be null, and it makes it impossible to delete the order, due to foreign key constraints.

---

I really hope you liked my Rest API, thanks! :thumbsup:

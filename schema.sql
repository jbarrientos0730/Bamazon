DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(

    item_id INTEGER(10) NOT NULL AUTO_INCREMENT,

    product_name VARCHAR(30) NOT NULL,

    department_name VARCHAR(30) NOT NULL,

    price DECIMAL(4,2) NOT NULL,

    stock_quantity INTEGER(10) NOT NULL,

    PRIMARY KEY(item_id)

);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Pillow", "Home", 12.00, 100), ("Steak", "Produce", 8.00, 40), ("Mascara", "Beauty", 13.50, 40), ("Chicken", "Produce", 6.40, 54), ("Towels", "Home", 5.50, 70), ("Eggs", "Produce", 4.25, 60), ("Eye Shadow Pallete", "Beauty", 40.00, 130), ("Juice", "Produce", 3.00, 200), ("Jeans", "Apparel", 22.00, 100), ("Shoes", "Apparel", 20.00, 175);
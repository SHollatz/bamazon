CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
   item_id INT NOT NULL AUTO_INCREMENT,
   product_name VARCHAR(255) NULL,
   department_name VARCHAR(255) NULL,
   price DECIMAL (10,2) NOT NULL,
   stock_quantity INT NOT NULL,
   PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Taste of the Wild", "dog food", 48.99, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("American Journey", "dog food", 39.99, 175);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Chuckit!", "dog toys", 3.36, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE("Booda", "dog toys", 2.29, 7500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE("Friskies", "cat food", 11.28, 600);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Fancy Feast", "cat food", 8.97, 890);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Oster", "cat supplies", 15.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Fat Cat", "cat supplies", 9.99, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE("SpongeBob Pineapple Home", "Aquarium Ornaments", 8.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE("Exotic Pebbles", "Aquarium Ornaments", 16.95, 30);

SELECT * FROM products;
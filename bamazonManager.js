var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
var table = new Table({
    head: ['Item ID', 'Product Name', 'Department Name', 'Price', 'Stock Quantity'],
});

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "bootcamp",
    password: "",
    database: "bamazonDB"
});

var query = "SELECT * FROM products";
connection.query(query, function (err, res) {
    if (err) throw err;
    //console.log(res);
    for (var i = 0; i < res.length; i++) {
        table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price,
        res[i].stock_quantity]);
    }
    runSearch();
});

function runSearch() {
    inquirer.prompt(
        {
            name: "option",
            type: "list",
            message: "Choose an option: ",
            choices: [
                "View Products for Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add New Product",
                "Quit Application"
            ]
        }).then(function (answer) {
            switch (answer.option) {
                case "View Products for Sale":
                    viewProducts();
                    break;
                case "View Low Inventory":
                    viewLowInventory();
                    break;
                case "Add to Inventory":
                    addInventory();
                    break;
                case "Add New Product":
                    addNewProduct();
                    break;
                case "Quit Application":
                    quitApplication();
                    break;
            }
        });
}

function viewProducts() {
    console.log(table.toString());
    console.log("\n\n");
    runSearch();
}

function viewLowInventory() {
    var lowInventory = new Table({
        head: ['Item ID', 'Product Name', 'Department Name', 'Price', 'Stock Quantity'],
    });
    //console.log(table.length);
    //console.log(table[4][4]);
    for (var i = 1; i < table.length; i++) {
        if (table[i][4] < 5) {
            lowInventory.push(table[i]);
        }
    }
    if (lowInventory[0]) {
        console.log(lowInventory.toString());
    } else {
        console.log("All items are in stock with 5 units or more.");
    }
    console.log("\n\n");
    runSearch();
}

function addInventory() {
    inquirer.prompt([
        {
            name: "product_id",
            type: "input",
            message: "Type in item_id of item you want to add"
        },
        {
            name: "amount",
            type: "input",
            message: "How many units do you want to add?"
        }
    ]).then(function (answer) {
        var item_id = answer.product_id - 1;
        var stock_quantity = table[item_id][4];
        var new_quantity = stock_quantity + parseInt(answer.amount);
        var update = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
        connection.query(update, [new_quantity, answer.product_id], function (err, result) {
            if (err) throw err;
            //console.log("stock_quantity is from " + stock_quantity + " to " + new_quantity + " updated.");
        });
        console.log("\n\n");
        runSearch();
    })
}

function addNewProduct() {
    inquirer.prompt([
        {
            name: "product_name",
            type: "input",
            message: "What is the name of the product?"
        },
        {
            name: "department_name",
            type: "input",
            message: "Which is the responsible department?"
        },
        {
            name: "price",
            type: "input",
            message: "What is the sales price per unit?"
        },
        {
            name: "stock_quantity",
            type: "input",
            message: "How many units do you want to order?"
        },
    ]).then(function (answer) {
        var insert = "INSERT INTO products (product_name, department_name, price, stock_quantity)\n"
            + "VALUES(?, ?, ?, ?)";
            //console.log("insert");
        connection.query(insert, [answer.product_name, answer.department_name, answer.price, answer.stock_quantity], function (err, result) {
            if (err) throw err;
            console.log("result");
        });
        console.log("\n\n");
        runSearch();
    });
}

function quitApplication() {
    connection.end();
}
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
    password: "H()rr[]Y2C0d3",
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
    console.log(table.toString());
    runSearch();
});

function runSearch() {
    inquirer.prompt([
        {
            name: "product_id",
            type: "input",
            message: "Which product would you like to order? Type in item_id"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many units would you like to buy?"
        }

    ]).then(function (answer) {
        //console.log(table[answer.product_id -1][4]);
        //console.log(answer);
        var item_id = answer.product_id-1;
        var stock_quantity = table[item_id][4];
        var price = table[item_id][3];
        if (stock_quantity < answer.quantity) {
            console.log("Insufficient quantity!");
        } else {
            var new_quantity = table[item_id][4] - answer.quantity;
            var update = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
            connection.query(update,[new_quantity, answer.product_id], function(err, result) {
                if (err) throw err;
                //console.log("stock_quantity is from " + stock_quantity + " to " + new_quantity + " updated.");
            });
            calculateTotal(price, answer.quantity);
        }
        console.log("\n\n");
        runSearch()      
    });
}

function calculateTotal(price, quantity) {
    var total = price * quantity;
    console.log("Your total is: $" + total.toFixed(2));
}
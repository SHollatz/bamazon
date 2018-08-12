# bamazon
## description
This CLI node.js application provides a storefront with MySQL.
bamazonCustomer.js takes in customer orders, depletes stock from the store's inventory, and displays total costs.
bamazonManager.js provides 4 options: view products for sale, view low inventory, stock up inventory, or add new product.

## how to run the app
*To see the products on sale in this store and place an order as customer, simply run "node bamazonCustomer.js" in your CLI. The prompts will guide you through the application.

*To run the Manager options type "node bamazonManager.js" in your CLI. The prompts will guide you through the application.

## used technology
Node.js
MySQL
npm packages: inquirer, mysql, cli-table

## demo
![Customer Order](/images/Demo_Customer01.PNG)
![Updated Inventory After Order](/images/Demo_Customer02.PNG)
![Manager View Products + View Low Inventory + Add Inventory](/images/Demo_Manager01.PNG)
![Manager View Products + Add New Product](/images/Demo_Manager02.PNG)
![Manager View Products + Quit Application](/images/Demo_Manager03.PNG)

## known issues
Currently the app needs to restart to update values from database.

## license
MIT

## author
Sabine Hollatz


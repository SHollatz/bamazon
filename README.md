# bamazon
## Description
This CLI node.js application provides a storefront with MySQL.
bamazonCustomer.js takes in customer orders, depletes stock from the store's inventory, and displays total costs.
bamazonManager.js provides 4 options: view products for sale, view low inventory, stock up inventory, or add new product.

## How to Run the App
To see the products on sale in this store and place an order as customer, simply run "node bamazonCustomer.js" in your CLI. The prompts will guide you through the application.

To run the Manager options type "node bamazonManager.js" in your CLI. The prompts will guide you through the application.

## Used Technology
Node.js,
MySQL,
npm packages: inquirer, mysql, cli-table

## Demo
###Run node bamazonCustomer.js
![Customer Order](/images/Demo_Customer01.PNG)
![Updated Inventory After Order](/images/Demo_Customer02.PNG)

###Run node bamazonManager.js
![Manager View Products + View Low Inventory + Add Inventory](/images/Demo_Manager01.PNG)
![Manager View Products + Add New Product](/images/Demo_Manager02.PNG)
![Manager View Products + Quit Application](/images/Demo_Manager03.PNG)

## Known Issues
Currently the app needs to restart to update values from database.

## License
MIT License Agreement

## Author
Sabine Hollatz


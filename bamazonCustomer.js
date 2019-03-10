var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Sandr@0730",
    database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

function start() {
    connection.query("SLECT * FROM products", function(err, results){
        if (err) throw err;

        inquirer.prompt([
            {
                name:"choice",
                type:"rawlist",
                choices: function() {
                    var choiceArr = [];
                    for (i=0; i<results.length; i++){
                        choiceArr.push(results[i].product_name);
                    }
                    return choiceArr;
                },
                message:"What product would you like to purchase today?"
            },
            {
                name:"purchase",
                type:"input",
                message:"Please enter a quantity that you wish to purchase"
            }
        ]).then(function(answer){
            chosenProduct;
            for (i=0; i<results.length; i++){
                if(results[i].product_name == answer.choice){
                    chosenProduct = results[i];
                }
            }

            if(chosenProduct.stock_quantity < parseInt(answer.purchase)){
                connection.query("UPDATE products SET ? WHERE ?",
                [
                    {stock_quantity: stock_quantity-answer.purchase},
                    {item_id: chosenProduct.item_id}
                ],
                function(err){
                    if (err) throw err;
                    total = chosenProduct.price*parseInt(answer.purchase);
                    console.log("Total Price: " + total);
                    start();
                });
            }
            else{
                console.log("Sorry. Not enough products in stock to satisfy your order.")
                start();
            }
        })
    })
};
const web3 = require('web3');
const express = require('express');
const Tx = require('ethereumjs-tx');
const app = express();

//Infura HttpProvider Endpoint
web3js = new web3(new web3.providers.HttpProvider("https://rinkeby.infura.io/v3/717d6351fc7748f1a699a12fa029301f"));


function getBlock(){
    web3js.eth.getBlockNumber().then(function(res){
      console.log(res);
      for (var i=res; i > res-2; i--) {
      web3js.eth.getBlock(i).then(function(res){
        //console.log( res.transactions);
        for(var j=0; j< res.transactions.length ;j++){
          //console.log(res.transactions[j])
          web3js.eth.getTransactionReceipt(res.transactions[j])
.then(function(res){
        //console.log(res.blockNumber, res.from, res.to, res.transactionHash, res.status)

        var blockno= res.blockNumber;
        var frm= res.from;
        var toaddre= res.to;
        var txnhash= res.transactionHash;
        var st= res.status;
        var mysql = require('mysql');
console.log("--------------"+blockno)
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "block_transactions"
});
 var sql = "INSERT INTO user_transaction (`blockNumber`, `from`,`to`, `transactionHash`, `status`) VALUES ('" + blockno + "', '" + frm + "', '" + toaddre + "', '" + txnhash + "', '" + st + "');";
            
con.query(sql, [blockno , frm, toaddre, txnhash, st], function (err, data) {
    if (err) {
        console.log(err);
    } else {
        // successfully inserted into db
        console.log("record inserted")
    }
});


  
  con.query("SELECT * FROM user_transaction WHERE blockNumber LIKE '4909915'", function (err, result) {
    if (err) throw err;
    console.log(result);
  
});

});


        }
        
      });
    }

    })

}
getBlock();


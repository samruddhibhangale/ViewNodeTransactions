const web3 = require('web3');
const express = require('express');
const Tx = require('ethereumjs-tx');

//var getInfo = require("./app/getInfo.js")
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mysql = require('mysql');
const knex=require('knex')({
  client:"mysql"
})


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "block_transactions"
});

app.get('/getInfo/:address',async function (req, res) {

    var addressInput= req.params.address
    if(req.params.address!= null){
      var masterQuery = knex('tablename')
      .select(['*'])
      .from('user_transaction')
      .where({from: req.params.address.toString()})
  
      .toString()+";";
    }
      con.query(masterQuery,(error,result,fields)=>{    
        if(error) throw error
  
        
        if(result.length!=0){
          var finalResult={}
          //console.log(result)
          finalResult["output"]=result
            res.status(200).send(finalResult);
        }
        else
        {
          res.status(404).send("Failed to Login!")
        }
    })

  
});

  
app.listen(1919, () => console.log(' Started on Port 1919!'))
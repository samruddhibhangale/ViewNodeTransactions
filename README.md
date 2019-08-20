# ViewNodeTransactions
Nodejs v8.x.0 (prefered version- v8.16.0 )

####### Step 1 ######## cd /ViewNodeTransactions

####### Step 2 ######## nmp install

####### Step 3 ########
nodejs app.js

Link:- http://localhost:1919/getInfo/"address"

#### Interacting with application
-For now there is one GET API, which will return an transaction formation for an perticuler address.

example-
(Hit the below API from any client applications like Postman or Insomnia)

-   http://localhost:1919/getInfo/0x7ace76a35a10f64d076e3be9ee41500f5475e726

OUTPUT -

{
    "output": [
        {
            "blockNumber": "4909910",
            "from": "0x7ace76a35a10f64d076e3be9ee41500f5475e726",
            "to": "0x7122fea3a32276e6057ece3cb8bed764189b5e95",
            "transactionHash": "0xd98f987eedbfe1ac8cdef9a37409862a3a8067378a0a341487f1dfa7b9c49a6c",
            "status": "true"
        }
    ]
}


#####Step to import DB
Run the following command to import db
--- mysql -u root -p block_transactions < dbexport.sql 

let mysql=require("mysql");

let conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database :" examapp"
});
conn.connect((err)=>
{
    if(err)
    {
    console.log("database not connected");
    }
    else{
        console.log("databse is connected");
    }
});
module.exports=conn;
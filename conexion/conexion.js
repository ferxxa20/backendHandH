var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'tienda'
});

connection.connect(
    (err)=>{
        if(!err){
            console.log("Conexion establecida");
        }else{
            console.log("Conexion fallida");
        }
    }
);

module.exports=connection;

//consultar

/*connection.query("SELECT *FROM productos",function(err,resultados){
    console.log(resultados);
});

connection.end();*/
var express = require('express');
var router = express.Router();
var db=require("../conexion/conexion");

/* GET users listing. */
router.get('/', function(req, res, next) {

    db.query("SELECT *FROM productos",function(err,resultados){

        console.log(resultados);

        res.render('productos', { title: 'Productos ',Productos:resultados });

    });
  });

module.exports = router;

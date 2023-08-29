var express = require('express');
var router = express.Router();
var db=require("../conexion/conexion");

/* GET users listing. */
router.get('/', function(req, res, next) {

    db.query("SELECT * FROM productos",function(err,resultados){

        console.log(resultados);

        res.render('productos', { title: 'Productos ',Productos:resultados });

    });
  });


//Alta de registros
  router.post('/agregar', function (req, res, next) {
    const nombreProducto = req.body.producto;
    const stock = req.body.stock;
    const precio = req.body.precio;
    const proveedor = req.body.proveedor;

    // Realiza la inserción en la base de datos
    db.query("INSERT INTO productos (producto, stock, precio, proveedor) VALUES (?, ?, ?, ?)", [nombreProducto, stock, precio, proveedor], function(err, resultados) {
        if (err) {
            console.log(err);
            // Aquí puedes manejar errores de inserción si es necesario
            res.send('Error al agregar el producto');
        } else {
            console.log(resultados);
            res.redirect('/crud_productos'); // Redirige a la página de lista de productos
        }
    });
});


module.exports = router;
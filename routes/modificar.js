const express = require('express');
const app = express();
var router = express.Router();

app.use(express.static('public'));


router.get('/modificar', function(req, res, next) {
    const idProducto = req.body.id;
    db.query("SELECT * FROM productos WHERE id=?",[idProducto],function(err,resultados){
        if (err) {
            console.log(err);
            // Manejar errores de actualización si es necesario
            res.send('Error al modificar el producto');
        } else {
            console.log(resultados);
            res.redirect('/views/modificar'); 
        }
        
    });
  });


router.post('/modificar', function (req, res, next) {
    const idProducto = req.body.id; // Captura el ID del campo oculto
    const stock = req.body.stock;
    const precio = req.body.precio;

    // Realiza la actualización en la base de datos
    db.query("UPDATE productos SET stock=?, precio=? WHERE id=?", [stock, precio, idProducto], function(err, resultados) {
        if (err) {
            console.log(err);
            // Manejar errores de actualización si es necesario
            res.send('Error al modificar el producto');
        } else {
            console.log(resultados);
            res.redirect('/productos'); // Redirige a la página de lista de productos
        }
    });
});


module.exports = router;
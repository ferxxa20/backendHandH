const express = require('express');
const app = express();
var router = express.Router();

app.use(express.static('public'));

/* GET home page. index.ejs*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Harmony Heaven' });
});




module.exports = router;

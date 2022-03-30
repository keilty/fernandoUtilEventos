var express = require('express');
var router = express.Router();

const presupuestoValidator = require('../validations/presupuestoValidator.js');

const {index, presupuesto, pedirPresupuesto, productosMesas, productosVajilla} = require('../controllers/indexController');

/* GET home page. */
router.get('/', index);
router.get('/formPresupuesto', presupuesto);
router.post('/send', presupuestoValidator, pedirPresupuesto);
router.get('/productsList', productosMesas);
router.get('/productsList', productosVajilla);


module.exports = router;

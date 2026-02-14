const express = require('express');
const router = express.Router();

const CarroceriaController = require('../controller/carroceria-controller');
router.get('/', CarroceriaController.getAll);

router.get('/search', CarroceriaController.getByHitbox);

router.get('/:id', CarroceriaController.getById);

module.exports = router;
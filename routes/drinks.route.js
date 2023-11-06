const { Router } = require('express')
const {drinksController} = require('../controllers/drinks.controller')
const router = Router()


router.get('/drinks', drinksController.getDrinks);
router.get('/drinks/inStock', drinksController.StockDrinks);
router.get('/drinks/:id', drinksController.getSpecificDrinks);
router.delete('/drinks/:id', drinksController.delDrinks);
router.patch('/drinks/:id', drinksController.updateDrink);

router.post('/drinks', drinksController.addDrinks)


module.exports = router;
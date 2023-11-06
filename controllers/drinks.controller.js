const Drinks = require("../models/Drink.model")


module.exports.drinksController = {
    getDrinks: (req, res) => {
        Drinks.find()
        .then((data) => {
            res.json(data)
        })
    },
    addDrinks: (req, res) => {
        Drinks.create({
            name: req.body.name,
            price: req.body.price,
            inStock: req.body.inStocktock,
            coffeinIncluded: req.body.coffeinIncluded,
            volume: req.body.volume,
            description: req.body.description
        
        }).then(() => {
            res.json('Drink has been added')
        })
    },
    StockDrinks: (req, res) => {
        Drinks.find({inStock: true})
        .then((data) => {
            res.json(data)
        })    

    },
    getSpecificDrinks: (req,res) => {
        Drinks.findById(req.params.id)
        .then((data)=>{
            res.json(data)
        })
    },
    delDrinks: (req,res) => {
        Drinks.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json('deleted..')
        })
    },
    updateDrink: (req, res) => {
        Drinks.findByIdAndUpdate(req.params.id, {name: req.body.name, price: req.body.price})
        .then(() => {res.json('updated')})

    }
}
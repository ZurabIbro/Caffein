const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(require('./routes/drinks.route'))




 
mongoose.connect("mongodb+srv://Drinks:qwerty123@coffein.miisgz6.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log('успешно соединились с сервером MongoDB'))
.catch(() => console.log('ощибка при соединений с сервером MongoDB'))

app.listen(4000, function (err){
    if(err){
        console.log(err);
    }else{
        console.log("сервер успешно запущен");
    } 
}) 
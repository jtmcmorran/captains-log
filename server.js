require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const Log = require('./models/log')
//database setup
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:false
})
mongoose.connection.once('open',()=>{
    console.log('connected to mongo')
})
//view engine setup
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:true}));
//index

//new
app.get('/logs/new',(req,res)=>{
  res.render('New');
})
//delete

//update

//create
app.post('/logs',(req,res)=>{
  if(req.body.shipIsBroken ==='on') req.body.shipIsBroken = true;
  else req.body.shipIsBroken = false;
  Log.create(req.body,(err,createdFruit)=>{
    if(err) res.status(404).send({msg:err.message})
    else res.redirect('/logs')
  })
})
//edit

//show


app.listen(PORT,()=>{
  console.log('listening on port ', PORT);
})

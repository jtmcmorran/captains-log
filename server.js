const express = require('express');
const app = express();
const PORT = 3000;


//database setup

//view engine setup
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//index

//new
app.get('/logs/new',(req,res)=>{
  res.render('New')
})
//delete

//update

//create

//edit

//show


app.listen(PORT,()=>{
  console.log('listening on port ', PORT);
})

require('dotenv').config();
const data=require('./data/flights.json')
const express= require('express');
const app= express();

const PORT= process.env.PORT || 2323;
app.use(express.json())
app.get('/', (req, res)=>{
    return res.send('Welcome to flight api')
 })
app.get('/flights', (req, res)=>{
   return res.json({data})
})


app.listen(PORT, ()=>  console.log(`App is listening on port ${PORT}`))


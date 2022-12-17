const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});

const db=process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);

mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('Successfully Conneted to DataBase!!!!!!!!!!!'));


const app=require('./app');

app.listen(3000,()=>{
    console.log('server listening!!!!!!');
})
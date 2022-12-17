const express =require('express');
const router=require('./routers/RouterTask');
const notFound=require('./middleWare/not-found');
const app=express();

app.use(express.static('./public'))
app.use(express.json());

app.use('/api/v1/tasks',router);
app.use(notFound);


module.exports=app;
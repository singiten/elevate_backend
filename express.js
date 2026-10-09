const express= require('express');
const app = express();

app.get('/books', (req,res)=>{
    res.send("getting a book");
});

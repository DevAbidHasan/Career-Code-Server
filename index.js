const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// root API
app.get("/", (req,res)=>{
    res.send("this is root API");
})

app.listen(port, ()=>{
    console.log("server chalu hoise baiya");
})
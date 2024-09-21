const express = require("express");
const port =  4000;
const app = express();

app.get("/", (req, res)=>{
    return res.status(200).json({"message": "Amazon ECR CICD with Git Actions"})
})


app.listen(port, ()=>{
    console.log(`server connected on port ${port}`)
})
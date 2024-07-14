const express =require("express");
const mainRouter= require("./routes/index");
const rootRouter= require("./routes/index");
const app= express();
const cors= require("cors");

app.use(cors());
 
const mainRouter= require("./routes/index");
app.use("api/v1",mainRouter);   
app.listen(3000);
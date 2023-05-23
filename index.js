const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const user = require("./src/routes/userRoutes");
const port = process.env.SERVER_TYPE == "STAGING" ? Number(process.env.LOCAL_PORT) :  Number(process.env.SERVER_PORT);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public/"));

app.set("view engine", "ejs");
app.use("/", user);

if(process.env.SERVER_TYPE == "STAGING"){
    app.listen(port, ()=>{
      console.log(`localhost:${port}`);
    });
}else{
    console.log("Deploy Firebase");
};
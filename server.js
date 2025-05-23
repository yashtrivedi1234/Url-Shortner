import express from 'express';
import mongoose  from 'mongoose';
import { shortUrl, getOriginalUrl } from "./controllers/url.js";

const app = express();

app.use(express.urlencoded({extended: true}))

mongoose.connect ("mongodb+srv://yashtrivedi1020stp:2yRXysoZXRo73RTr@cluster0.xh9ogcw.mongodb.net/", {dbName: "Node_js_mastery_course"}).then(()=> console.log("Mongo db connected")).catch((err)=> console.log(err)) 

// rendering the ejs file
 app.get('/', (req,res)=>{
    res.render("index.ejs", {shortUrl: null})
 })

//  shorting Url Logic
app.post('/short', shortUrl);

// redirect to original url using shortcode:- dynamic routing
 app.get('/:shortCode', getOriginalUrl)

const port = 3000;

app.listen(port,()=> console.log(`server is running on port ${port}`))
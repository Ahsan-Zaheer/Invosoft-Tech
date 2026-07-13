const express = require('express');
const app = express();
const router = require('./router/contact-router');
const connectDb = require('./utils/db');
const cors = require('cors');









var corsOptions = {
    origin: "https://www.digitalenergy.au",
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD ",
    credentials: true,
  }

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/form", router);





// app.get("/", (req, res)=>{
//     res.status(200).send('Welcome to Mern');
// });
// app.get("/contact", (req, res)=>{
//     res.status(200).send('lets connect and build a community');
// });

connectDb().then(()=>{
    app.listen(5000, ()=>{
        console.log('server is running at port 5000');
    })
})
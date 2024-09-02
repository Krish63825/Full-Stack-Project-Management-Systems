const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const taskRoutes = require("./routes/taskroute");
const cors = require("cors");

//Middleware
app.use((req, res, next) => {
    console.log("path " + req.path + " method " + req.method);
    next();
});

app.use(express.json());

app.use(cors());

// app.get("/", (req, res) => {
// res.send("Hello World");
// });

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("DB connected Successfully and listening to " + process.env.PORT);
        });
    })
    .catch((error) => console.log(error));

    app.use('/api/tasks', taskRoutes);
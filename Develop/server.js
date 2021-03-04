// require('dotenv').config();
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
// const db = mongoose.connection;
// db.on('error', (error) => console.log(error))
// db.once('open', () => console.log('Connected to DB'))

// app.listen(3000, () => console.log('Server Started'))
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const morgan = require("morgan");
const path = require("path");
const routes = require('./routes/workouts')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public/assets"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = require("./models");

app.use('/workouts', routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
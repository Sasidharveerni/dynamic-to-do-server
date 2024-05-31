const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors')

dotenv.config();

const app = express();

const taskRoutes = require('./src/routes/task')

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(taskRoutes)

app.get('/', (req, res) => {
    res.send('Server is up and active');
})

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.Mongo_URL)
    .then(() => console.log('Database is connected !!'))
    .catch((err) => console.log(err))
})
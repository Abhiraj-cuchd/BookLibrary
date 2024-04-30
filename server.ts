const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const { dbConn } = require('./config/db.ts');

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser());
app.use(cors())
dbConn();

const port = process.env.PORT


app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})


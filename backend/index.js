require('dotenv').config();  
const express = require('express');
const cors = require('cors');
const rootRouter = require('./routes/index');
require('./db');  
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', rootRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const appRoutes = express.Router();

// will implement database later

const app = express();
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json())



app.use('/api', appRoutes);

app.listen(PORT, () => {
    console.log('server running on port: ' + PORT);
})

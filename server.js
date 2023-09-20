// const express = require('express');
// const app = express();
// const PORT = 4000 || process.env.port;
// const cors = require('cors');

// const mongoose = require('mongoose');
// require('dotenv').config();
// mongoose.set('strictQuery', false);

// app.use(express.json());
// app.use(cors());

// mongoose
//     .connect(process.env.MONGODB_LINK)
//     .then(() => console.log(`We were connected to Mongo DB`))
//     .catch(err => console.log(err));

// const messageRoutes = require('./MessageRoutes');
// app.use(messageRoutes);

// app.listen(PORT, () => console.log(`All is great on Port ${PORT}`));

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const messageRoutes = require('./MessageRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set('strictQuery', false);

const PORT = 4000 || process.env.port;

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log(`We were connected to Mongo DB`))
.catch(err => console.log(err));

app.use(messageRoutes);

app.listen(PORT, () => {
    console.log(`I'm listening on port ${PORT}`)
});
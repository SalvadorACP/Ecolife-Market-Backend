const express = require('express');
const connectToMongoDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

connectToMongoDB();
app.use(cors());
app.use(express.json());
app.use('/api', productRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

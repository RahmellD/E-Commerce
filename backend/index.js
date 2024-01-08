const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const userRouters = require('./routers/users')
const productRouters = require('./routers/products')

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRouters);
app.use('/api/products', productRouters);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

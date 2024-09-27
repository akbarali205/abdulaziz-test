require('express-async-errors');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const data = require('./src/routes/data')
const morgan = require('morgan');

require('./src/start/logging')()
require('./src/start/db')()
app.use(morgan('tiny'))
app.use((err, req, res, next) => {
    res.status(401).json(err);
});
app.use('/data', data)

app.get('/', (req, res) => {
    res.send('Hello World');
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

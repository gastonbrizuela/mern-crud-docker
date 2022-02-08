const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('./src/database');

const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(require('./src/routes/user.route'));

// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/', 'build', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

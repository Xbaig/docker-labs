const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from cache demo'));
app.listen(3000, () => console.log('Listening on 3000'));
// comment2
// comment
// comment2

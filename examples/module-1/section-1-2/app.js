const express = require('express');
const app = express();
app.use(express.json())
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});


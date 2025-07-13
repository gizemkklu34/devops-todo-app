const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const { title } = req.body;
    todos.push({ title });
    res.status(201).json({ message: 'Eklendi' });
});

app.listen(port, () => {
    console.log(`ToDo API http://localhost:${port} adresinde çalışıyor`);
});
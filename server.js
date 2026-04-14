const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Add todo
app.post('/todos', (req, res) => {
    const { task } = req.body;
    const newTodo = { id: Date.now(), task };
    todos.push(newTodo);
    res.json(newTodo);
});

// Delete todo
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== id);
    res.json({ message: "Deleted" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
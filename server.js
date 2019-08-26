import express from 'express';
import db from './db/db';
// Set up the express app
const app = express();
const port = process.env.PORT || 8080;
// get all todos
app.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});
const PORT = 5000;

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});
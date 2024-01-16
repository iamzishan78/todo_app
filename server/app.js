import express, { urlencoded, json } from 'express';
const app = express();
import cors from 'cors'
import todos from "./routes/todos.js";
import dotenv from 'dotenv';
import './db/conn.js'

// Configured dotenv
dotenv.config();

const PORT = process.env.PORT || 5000;
// This middleware use body parser to get the req.body
// Parse form data
app.use(urlencoded({ extended: false }))
// Parse json
app.use(json())
// Enable CORS for all routes
app.use(cors());


app.use('/api/todos', todos);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}....`)
})

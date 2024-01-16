import { Router } from 'express';
const router = Router()
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todosController.js'


router.get('/', getTodos).post('/', createTodo);
router.put('/:id', updateTodo).delete('/:id', deleteTodo)

export default router;
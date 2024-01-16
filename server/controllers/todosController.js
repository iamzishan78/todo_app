import todosModel from '../model/todosModel.js';

// Here We Create a new todo
export const createTodo = async (req, res) => {
    try {
        const { name, isCompleted } = req.body;

        if (typeof isCompleted !== 'boolean' || !name.trim()) {
            res.status(400).json({ success: false, message: 'Invalid input data' });
            return;
        }

        const newTodo = await todosModel.create({ name, isCompleted });
        res.status(201).json(newTodo);
    } catch (error) {
        console.error('Error in createTodo:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// Here We Updating a todo
export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, isCompleted } = req.body;

        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            res.status(400).json({ success: false, message: 'Invalid ID' });
            return;
        }
        const todo = await todosModel.findById(id);

        if (!todo) {
            res.status(404).json({ success: false, message: 'Todo not found' });
            return;
        }

        if (typeof isCompleted !== 'boolean' && isCompleted !== undefined) {
            res.status(400).json({ success: false, message: 'Invalid isCompleted value' });
            return;
        }

        if (name !== undefined) {
            if (!name.trim()) {
                res.status(400).json({ success: false, message: 'Invalid name' });
                return;
            }
            todo.name = name;
        }

        if (isCompleted !== undefined) {
            todo.isCompleted = isCompleted;
        }

        await todo.save();
        res.status(200).json(todo);
    } catch (error) {
        console.error('Error in updateTodo:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// Here We deleting a todo
export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            res.status(400).json({ success: false, message: 'Invalid ID' });
            return;
        }

        const todo = await todosModel.findById(id);

        if (!todo) {
            res.status(404).json({ success: false, message: 'Todo not found' });
            return;
        }

        const result = await todosModel.deleteOne({ _id: todo._id });

        if (result.deletedCount === 1) {
            res.status(200).json({ success: true, message: 'Todo deleted successfully' });
        } else {
            res.status(500).json({ success: false, message: 'Failed to delete the todo' });
        }
    } catch (error) {
        console.error('Error in deleteTodo:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// Here We Get all todos
export const getTodos = async (req, res) => {
    try {
        const results = await todosModel.find();
        res.status(200).json(results);
    } catch (error) {
        console.error('Error in getTodos:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};


import { createContext, useState } from 'react';
import axios from '../../config/axios'
import { toast } from 'react-hot-toast'

export const TodosContex = createContext();

export const TodosProvider = ({ children }) => {

    const [todos, setTodos] = useState([])
    const [todoToUpdate, setTodoToUpdate] = useState(null)

    const getTodos = async () => {
        try {
            const { data } = await axios.get('/todos')
            setTodos(data.todos);
        } catch (error) {
            console.log(error);
            toast.error('error getting todos')
        }
    }

    const createTodo = async (body) => {
        try {
            const { data } = await axios.post('/todos', body)
            setTodos([data.todo, ...todos])
            toast.success('todo created')
        } catch (error) {
            console.log(error.response.data);
            toast.error('error creating todo')
        }
    }

    const updateTodo = async (id, body) => {
        try {
            const { data } = await axios.put(`/todos/${id}`, body)
            const tempTodos = todos.map(todo => {
                if (todo.id == id) {
                    return data.todo;
                }
                return todo;
            })
            setTodos(tempTodos);
            setTodoToUpdate(null)
            toast.success('todo updated!')
        } catch (error) {
            console.log(error.response.data);
            toast.error('error updating todo')
        }
    }

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`/todos/${id}`)
            const tempTodos = todos.filter(todo => todo.id !== id);
            setTodos(tempTodos);
            toast.success('todo deleted!')
        } catch (error) {
            console.log(error.response.data);
            toast.error('error deleting todo')
        }
    }

    const handleComplete = (todo, completed) => {
        updateTodo(todo.id, { ...todo, completed })
    }

    return (
        <TodosContex.Provider
            value={{
                todos,
                setTodos,
                todoToUpdate,
                setTodoToUpdate,
                getTodos,
                createTodo,
                updateTodo,
                deleteTodo,
                handleComplete,
                deleteTodo
            }}
        >
            {children}
        </TodosContex.Provider>
    )
}

import React, { useEffect, useState } from 'react'
import axios from '../../config/axios'
import { toast } from 'react-hot-toast'

export const useTodos = () => {

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

    const addTodo = (todo) => {
        setTodos([todo, ...todos])
    }

    const handleComplete = (todo, completed) => {
        updateTodo(todo.id, { ...todo, completed })
    }

    return {
        todos,
        setTodos,
        todoToUpdate,
        setTodoToUpdate,
        getTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        handleComplete,
        deleteTodo
    }
}

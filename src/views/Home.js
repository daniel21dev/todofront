import { Container, Grid} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/layout/Navbar'
import { TodoForm } from '../components/todo/TodoForm'
import { TodoList } from '../components/todo/TodoList'
import axios from '../config/axios'
import { toast } from 'react-hot-toast'

export const Home = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos()
    },[])

    const getTodos = async () => {
        try {
            const { data } = await axios.get('/todos')
            setTodos(data.todos);
        } catch (error) {
            console.log(error);
            toast.error('error getting todos')
        }
    }

    const updateTodo = async (id,body) => {
        try {
            const { data } = await axios.put(`/todos/${id}`,body)
            const tempTodos = todos.map( todo =>{
                if(todo.id ==id){
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

    const addTodo = (todo) =>{
        setTodos([todo,...todos])
    }

    const handleComplete = (todo,completed)=>{
        console.log(completed);
        updateTodo(todo.id,{...todo,completed})
    }

    return (
        <>
            <Navbar />
            <Container>
                <Grid container>
                    <Grid item xs="12" sm="6" md="3">
                        <TodoForm 
                            addTodo={addTodo}
                        />
                    </Grid>
                    <Grid item xs="12" sm="6">
                        <TodoList 
                            todos={todos}
                            handleComplete={handleComplete}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

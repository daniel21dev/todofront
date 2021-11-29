import { Container, Grid} from '@mui/material'
import React from 'react'
import { Navbar } from '../components/layout/Navbar'
import { TodoForm } from '../components/todo/TodoForm'
import { TodoList } from '../components/todo/TodoList'
import {useNavigate} from 'react-router-dom'
export const Home = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Grid container>
                    <Grid item xs="12" sm="6" md="3">
                        <TodoForm 
                        />
                    </Grid>
                    <Grid item xs="12" sm="6">
                        <TodoList 
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

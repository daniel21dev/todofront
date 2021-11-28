import { Edit } from '@mui/icons-material'
import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/layout/Navbar'
import { TodoForm } from '../components/todo/TodoForm'

export const Home = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Grid container>
                    <Grid item xs="12" sm="6" md="3">
                        <TodoForm />
                    </Grid>
                    <Grid item xs="12" sm="6">
                        <p>hola</p>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

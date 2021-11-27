import { Card, CardContent, CardMedia, Container, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { LoginForm } from '../components/auth/LoginForm'
import { SignInForm } from '../components/auth/SignInForm'
import useStyles from '../styles'

const opposedForms = {
    'login':'signin',
    'signin':'login'
}
const Auth = () => {

    const classes = useStyles()
    const [form, setForm] = useState('login')

    const hanldeChangeForm = () =>{
        setForm(opposedForms[form])
    }

    return (
        <Container>
            <Grid
                container
                spacing={4}
                flex
                alignItems="center"
                justifyContent="center"
                className={classes.gridLogin}
            >

                <Grid item>
                    <Card className={classes.cardLogin}>
                        <CardMedia
                            image="https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                            text="todo login image"
                            className={classes.loginImage}
                        />
                        <CardContent
                            flex
                            alignItems="center"
                            justifyContent="center"
                            className={classes.loginCardContent}
                        >
                            {
                                form === 'login' ? (
                                    <LoginForm />

                                ):(
                                    <SignInForm />
                                )
                            }
                            
                            <Link
                                className={classes.link}
                                onClick={hanldeChangeForm}
                            >Or {opposedForms[form]}</Link>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

        </Container>
    )
}

export default Auth

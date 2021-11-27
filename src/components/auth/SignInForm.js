import React from 'react'
import { Button, Link, TextField, Typography } from '@mui/material'

export const SignInForm = () => {
    return (
        <>
            <Typography>SignIn</Typography>
            <TextField
                id="name"
                label="name"
                name="name"
                type="text"
                variant="outlined"
            />
            <TextField
                id="email"
                label="email"
                name="email"
                type="email"
                variant="outlined"
            />
            <TextField
                id="password"
                label="password"
                name="password"
                type="password"
                variant="outlined"
            />
            <Button
                variant="outlined"
            >SignIn</Button>
        </>
    )
}

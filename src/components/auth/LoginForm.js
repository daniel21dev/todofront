import { Button, Link, TextField, Typography } from '@mui/material'
import React from 'react'

export const LoginForm = () => {
    return (
        <>
            <Typography>Login</Typography>
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
            >login</Button>
        </>
    )
}

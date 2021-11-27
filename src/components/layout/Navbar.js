import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {Menu} from '@mui/icons-material'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const handleLogout = () =>{
        console.log('logout');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        TODO APP
                    </Typography>
                    <Link to="/auth">About</Link>
                    <Button 
                        color="inherit"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

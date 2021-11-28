import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../helpers/logout'
import { useNavigate } from "react-router";

export const Navbar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        logout(navigate)
    }
    const user = JSON.parse(localStorage.getItem('user')) || {};

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        TODO APP
                    </Typography>

                    <div style={{
                        display:'flex',
                        alignItems: 'center',
                        }}>
                        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                            hello {user.name} 
                        </Typography>
                        <Button
                            color="inherit"
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </div>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

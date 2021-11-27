import { Edit } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/layout/Navbar'

export const Home = () => {
    return (
        <>
            <Navbar />
            <Typography variant="h3">Hola mundo</Typography>
            <Button variant="outlined">
                <Edit fontSize="4" />
                Hola mundo
            </Button>
        </>
    )
}

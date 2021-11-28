import { Button, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useStyles from '../../styles'
import axios from '../../config/axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router'

export const LoginForm = () => {

    const classes = useStyles()
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('the email is not valid')
                .required('the email is required'),
            password: Yup.string()
                .required('the password is required')
        }),
        onSubmit: async (formData) => {
            try {
                const { data } = await axios.post('/login', formData)
                localStorage.setItem('token', data.token)
                localStorage.setItem('user',JSON.stringify(data.user))
                navigate('/')
            } catch (error) {
                console.log(error);
                let msgError = 'error doing login :('
                toast.error(msgError)
            }
        }
    })

    return (
        <form
            className={classes.loginForm}
            onSubmit={formik.handleSubmit}
        >
            <Typography>Login</Typography>
            <TextField
                id="email"
                label="email"
                name="email"
                type="email"
                variant="outlined"
                helperText={formik.errors.email}
                error={formik.touched.email && formik.errors.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            <TextField
                id="password"
                label="password"
                name="password"
                type="password"
                variant="outlined"
                helperText={formik.errors.password}
                error={formik.touched.password && formik.errors.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            <Button
                variant="outlined"
                type="submit"
            >login</Button>
        </form>
    )
}

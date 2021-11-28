import React from 'react'
import { Button, Link, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useStyles from '../../styles'
import axios from '../../config/axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router'

export const SignInForm = () => {

    const classes = useStyles()
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('the name is required'),
            email: Yup.string()
                .email('the email is not valid')
                .required('the email is required'),
            password: Yup.string()
                .required('the password is required')
        }),
        onSubmit: async (formData) => {
            try {
                const { data } = await axios.post('/users', formData)
                localStorage.setItem('token', data.token)
                localStorage.setItem('user', JSON.stringify(data.user))
                navigate('/')
            } catch (error) {
                console.log(error.response.data);
                let msgError =  error.response?.data?.errors[0]?.msg || 'error saving user'
                toast.error(msgError)
            }
        }
    })

    return (
        <form
            className={classes.loginForm}
            onSubmit={formik.handleSubmit}
        >
            <Typography>SignIn</Typography>
            <TextField
                id="name"
                label="name"
                name="name"
                type="text"
                variant="outlined"
                helperText={formik.errors.name}
                error={ formik.touched.name && formik.errors.name }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            <TextField
                id="email"
                label="email"
                name="email"
                type="email"
                variant="outlined"
                helperText={formik.errors.email}
                error={ formik.touched.email && formik.errors.email }
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
                error={ formik.touched.password && formik.errors.password }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            <Button
                type="submit"
                variant="outlined"
            >SignIn</Button>
        </form>
    )
}

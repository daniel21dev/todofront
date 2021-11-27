import React from 'react'
import { Button, Link, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useStyles from '../../styles'

export const SignInForm = () => {

    const classes = useStyles()

    const formik = useFormik({
        initialValues: {
            name: '',
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
        onSubmit: async ({ email, password }) => {
            console.log({ email, password });
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
                error={ formik.errors.name }
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
                error={ formik.errors.email }
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
                error={ formik.errors.password }
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

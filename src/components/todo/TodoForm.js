import { Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import useStyles from './styles';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from '../../config/axios'
import { toast } from 'react-hot-toast'

export const TodoForm = () => {

    const [date, setDate] = useState(new Date())
    const classes = useStyles()

    const formik = useFormik({
        initialValues: {
            title: '',
            content: ''
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('the title is required'),
            content: Yup.string()
        }),
        onSubmit: async (formData) => {
            try {
                formData.dueDate = date;
                const { data } = await axios.post('/todos', formData)
                console.log(data);
                toast.success('todo created')
            } catch (error) {
                console.log(error);
                let msgError = 'error creting todo :('
                toast.error(msgError)
            }
        }
    })

    return (
        <div>
            <Card className={classes.cardForm}>
                <CardContent >
                    <Typography gutterBottom>Add a ToDo</Typography>
                    <form
                        className={classes.form}
                        onSubmit={formik.handleSubmit}
                    >
                        <TextField
                            id="title"
                            label="title"
                            name="title"
                            type="text"
                            variant="outlined"
                            helperText={formik.errors.title}
                            error={formik.touched.title && formik.errors.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                        />
                        <TextField
                            id="content"
                            label="content"
                            name="content"
                            type="text"
                            variant="outlined"
                            helperText={formik.errors.content}
                            error={formik.touched.content && formik.errors.content}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.content}
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>

                            <DesktopDatePicker
                                label="due date"
                                value={date}
                                minDate={new Date('2017-01-01')}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <Button 
                            variant="outlined"
                            type="submit"
                            >
                            Save
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

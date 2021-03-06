import { CheckCircleOutlined, CheckCircleOutline, Edit, Delete } from '@mui/icons-material'
import { Button, Card, CardContent, Checkbox, ListItem, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import useStyles from './styles'
import { TodosContex } from './TodosContext';
import Swal from 'sweetalert2'

const label = { inputProps: { 'aria-label': 'completed' } };

export const Todo = ({ todo }) => {


    const classes = useStyles()
    const [checked, setChecked] = useState(todo.completed)
    const { handleComplete, deleteTodo, setTodoToUpdate, todoToUpdate } = useContext(TodosContex)

    const handleCheck = (e) => {
        setChecked(e.target.checked)
        handleComplete(todo, e.target.checked)
    }

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteTodo(todo.id)
            }
        })
    }

    const handleUpdate = () => {
        setTodoToUpdate(todo)
    }

    return (
        <div>
            <Card className={classes.cardTodo}>
                <CardContent >
                    <div>
                        <Checkbox {...label}
                            color="success"
                            checked={checked}
                            onChange={handleCheck}
                            icon={<CheckCircleOutline />}
                            checkedIcon={<CheckCircleOutlined />}
                        />
                        <Button
                            onClick={handleUpdate}
                        >
                            <Edit />
                        </Button>
                        <Button
                            onClick={handleDelete}
                        >
                            <Delete color="error" />
                        </Button>
                        <Typography gutterBottom>Title: {todo.title}</Typography>
                    </div>
                    <ListItem divider>
                    </ListItem>

                    <Typography gutterBottom>Description: {todo.content}</Typography>
                    <Typography gutterBottom>Due date:{new Date(todo.dueDate).toLocaleDateString()}</Typography>
                    <Typography gutterBottom>{todo.completed}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

import { CheckCircleOutlined, CheckCircleOutline, Edit, Delete } from '@mui/icons-material'
import { Button, Card, CardContent, Checkbox, ListItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import useStyles from './styles'

const label = { inputProps: { 'aria-label': 'completed' } };

export const Todo = ({ todo, handleComplete }) => {

    const classes = useStyles()
    const [checked, setChecked] = useState(todo.completed)

    const handleCheck = (e) => {
        setChecked(e.target.checked)
        handleComplete(todo, e.target.checked)
    }

    return (
        <div>
            <Card className={classes.cardTodo}>
                <CardContent >
                    <ListItem divider>
                        <Checkbox {...label}
                            color="success"
                            checked={checked}
                            onChange={handleCheck}
                            icon={<CheckCircleOutline />}
                            checkedIcon={<CheckCircleOutlined />}
                        />
                        <Typography gutterBottom>{todo.title}</Typography>
                        <div>
                            <Button>
                                <Edit />
                            </Button>
                            <Button>
                                <Delete color="error"/>
                            </Button>
                        </div>
                    </ListItem>

                    <Typography gutterBottom>{todo.content}</Typography>
                    <Typography gutterBottom>{todo.dueDate}</Typography>
                    <Typography gutterBottom>{todo.completed}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

import { Alert } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { Todo } from './Todo';
import { TodosContex } from './TodosContext';
import { useTodos } from './useTodos';

export const TodoList = () => {

    const { getTodos, setTodos, todos} = useContext(TodosContex)

    useEffect(() => {
        getTodos()
    }, [setTodos])

    return (
        <>
            {
                todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                    />
                ))
            }
        </>
    );
}
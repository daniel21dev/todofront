import React, { useEffect, useState } from 'react'
import { Todo } from './Todo';


export const TodoList = ({todos, handleComplete}) => {

    return (
        todos.map(todo => (
            <Todo 
                key={todo.id} 
                todo={todo} 
                handleComplete={handleComplete}
                />
        ))
    );
}
import React from 'react';
import useTodos from '../../hooks/useTodos';
import { Todo } from '../../modules/todo';
import ToDoItem from './TodoItem';

const TodoList = () => {
    const todos = useTodos();

    if(todos.length===0) return <p>등록된 항목이 없습니다.</p>

    return(
        <ul>
            {todos.map(todo=>(
                <ToDoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    )
}

export default TodoList;
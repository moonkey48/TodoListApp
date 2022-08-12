import React from 'react';
import { Todo } from '../../modules/todo';
import '../../assets/styles/TodoItem.css'

type TodoItemProps = {
    todo:Todo
}

const ToDoItem = ({todo}:TodoItemProps) => {
    // TODO: 커스텀 Hook로 OnToggle, onRemove 구현
    return(
        <li className={`ToDoItem ${todo.done ? 'done' : ''}`} >
            <span className='text'>{todo.text}</span>
            <span className='remove'>(X)</span>
        </li>
    )
}

export default ToDoItem;
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../modules/todo';

export default function useTodoActions(id:number){
    const dispath = useDispatch()
    const onToggle = useCallback(()=>dispath(toggleTodo(id)),[dispath,id]);
    const onRemove = useCallback(()=>dispath(removeTodo(id)),[dispath,id]);

    return {onToggle, onRemove};
}
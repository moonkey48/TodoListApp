const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

export const addTodo = (text:string)=>({
    type:ADD_TODO,
    payload:text,
})
export const toggleTodo = (id:number)=>({
    type:TOGGLE_TODO,
    payload:id
})
export const removeTodo = (id:number)=>({
    type:REMOVE_TODO,
    payload:id
})

type TodosAction = 
    | ReturnType<typeof addTodo>
    | ReturnType<typeof toggleTodo>
    | ReturnType<typeof removeTodo>

type Todos = {
    id:number,
    text:string,
    done:boolean
}
type TodoState = Todos[];

const initialState: TodoState = [
    {id:1, text:'Typescript', done:false}
]

function todos(state:TodoState = initialState, action:TodosAction):TodoState{
    switch(action.type){
        case ADD_TODO:
            const nextId = Math.max(...state.map(todo=>todo.id))+1;
            return state.concat({
                id:nextId,
                text: action.payload,
                done:false,
            })
        case TOGGLE_TODO:
            return state.map(todo=>todo.id===action.payload?{...todo, done: !todo.done}:todo)
        case REMOVE_TODO:
            return state.filter(todo=>todo.id!==action.payload);
        default:
            return state;
    }
}
export default todos;
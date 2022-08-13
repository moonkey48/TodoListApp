import { ActionType, createReducer, createStandardAction } from 'typesafe-actions';

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

export const addTodo = createStandardAction(ADD_TODO)<string>();
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();

const actions = {addTodo, toggleTodo, removeTodo}

type TodosAction = ActionType<typeof actions>

export type Todo = {
    id:number;
    text:string;
    done:boolean;
};
type TodosState = Todo[];

const initialState: TodosState = [
    {id:1, text:'Typescript',done:false},
    {id:2, text:'Javascript',done:true},
    {id:3, text:'Redux',done:false},
]

const todos = createReducer<TodosState, TodosAction>(initialState,{
    [ADD_TODO]: (state, {payload:text}) => 
        state.concat({
            id:Math.max(...state.map(todo=>todo.id))+1,
            text,
            done:false
        }),
        [TOGGLE_TODO]: (state, {payload:id})=>
            state.map(todo=>todo.id===id?{...todo,done:!todo.done}:todo),
        [REMOVE_TODO]: (state, {payload:id})=>{
            return state.filter(todo=>todo.id!==id)
        }
});

export default todos


/**
 * typesafe-actions 적용전
 */
//  const ADD_TODO = 'todos/ADD_TODO' as const;
//  const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
//  const REMOVE_TODO = 'todos/REMOVE_TODO' as const;
 
//  export const addTodo = (text:string) =>({
//      type:ADD_TODO,
//      payload:text
//  })
//  export const toggleTodo = (id:number)=>({
//      type:TOGGLE_TODO,
//      payload:id
//  })
//  export const removeTodo = (id: number)=>({
//      type:REMOVE_TODO,
//      payload:id
//  })
 
//  type TodosAction = 
//      | ReturnType<typeof addTodo>
//      | ReturnType<typeof toggleTodo>
//      | ReturnType<typeof removeTodo>;
 
//  export type Todo = {
//      id:number;
//      text:string;
//      done:boolean;
//  };
//  type TodosState = Todo[];
 
//  const initialState: TodosState = [
//      {id:1, text:'Typescript',done:false},
//      {id:2, text:'Javascript',done:true},
//      {id:3, text:'Redux',done:false},
//  ]
 
//  function todos(state:TodosState = initialState, action:TodosAction):TodosState{
//      switch(action.type){
//          case ADD_TODO:
//              const nextId = Math.max(...state.map(todo=>todo.id))+1;
//              return state.concat({
//                  id:nextId,
//                  text:action.payload,
//                  done:false
//              })
//          case TOGGLE_TODO:
//              return state.map(todo=>
//                  todo.id === action.payload ? {...todo, done:!todo.done}:todo
//              )
//          case REMOVE_TODO:
//              return state.filter(todo=>todo.id!==action.payload);
//          default:
//              return state;
//      }
//  }
//  export default todos
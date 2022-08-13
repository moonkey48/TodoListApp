import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import Counter from './components/counter/Counter';
import TodoInsert from './components/ToDo/TodoInsert';
import TodoList from './components/ToDo/TodoList';


function App() {
  return (
    <>
      <TodoInsert/>
      <TodoList/>
      {/* <Counter/> */}
    </>
  );
}

export default App;

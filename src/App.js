import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoBoard from "./components/TodoBoard"

//1. 인풋창이 있고 버튼이 있다.
//2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가가된다.
//3. 아이템 삭제버튼을 누르면 삭제가 가능하다

function App() {
const [inputValue, setInputValue] = useState('')
const [todoList, setTodoList] = useState([])
const addItem = ()=>{
  console.log("im herererere:", inputValue);
  //기존에 있는 아이템은 유지하고, ...todoList, 그 뒤에 새로운 input value를 넣는다.
  setTodoList([...todoList, inputValue])
}
  return (
    <main>
      {/* 칠때마다 console.log에 나오게했습니다. */}
      <input value={inputValue} type="text" onChange={(event)=> setInputValue(event.target.value)}/>
        <button onClick={addItem}>추가</button>
        <TodoBoard todoList={todoList}/>
    </main>
  );
}

export default App;

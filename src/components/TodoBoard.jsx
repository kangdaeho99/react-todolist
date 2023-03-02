import React from "react"
import TodoItem from "./TodoItem"

function TodoBoard(props){
    console.log("todoBoard", props.todoList)
    return (
        <div>
            <h1>Todo List</h1>
            {/* 자바스크립트 쓸려면 {} 시작 */}
            {/* props.todoList의 내용을 map 함수를 통해 돌리는데
            todoList를 하나하나 꺼내다가 todoitem에 넣을것입니다.
            map은 todolist에 있는 것들을 하나하나씩 받아서 item으로 
            반환해주고, 그 item을 todoitem에 props를 보냅니다.
            배열에 있는 내용을 보여주고싶을떄 array함수를 사용한다.
            */}
            {props.todoList.map((item)=><TodoItem item={item}/>)}
        </div>
    )
}

export default TodoBoard
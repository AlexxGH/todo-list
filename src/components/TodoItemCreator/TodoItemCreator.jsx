import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../atoms/atom";
import './TodoItemCreator.scss';


export function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
  
    const addItem = () => {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue('');
    };
  
    const onChange = ({target: {value}}) => {
      setInputValue(value);
    };
  
    return (
      <div className="todo-item-creator">
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={addItem}>Add</button>
      </div>
    );
  }
  
  // utility for creating unique Id
  let id = 0;
  function getId() {
    return id++;
  }
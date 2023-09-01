import React, { useState } from 'react';
import data from './data.json';
import Header from './header';
import ToDoList from './ToDoList';

function App() {
  const [ toDoList, setToDoList ] = useState(data);
  return(
    <div>
     Hello These are your to do list
      <Header/>
      <ToDoList items={toDoList}/>
    </div>
  )

}

export default App;

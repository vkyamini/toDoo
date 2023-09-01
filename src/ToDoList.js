import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = ({items}) => {
   return (
       <div>
           {items.map(obj => {
               return (
                   <ToDo singleItem={obj} />
               )
           })}
       </div>
   );
};
 
export default ToDoList;
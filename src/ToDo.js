import React from 'react';
 
const ToDo = ({singleItem}) => {
   return (
       <div>
           {singleItem.task}
       </div>
   );
};
 
export default ToDo;
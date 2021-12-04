import React from 'react'



const ToDo = ({task}) => { 


    return (
        <div> 

        <ul> 

         <li> {task.todo} </li> 
        <input type='checkbox'  />  

        </ul> 
    
        </div>
    )
}

export default ToDo;



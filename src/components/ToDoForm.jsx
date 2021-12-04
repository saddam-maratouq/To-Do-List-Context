import React, { useState,useContext } from 'react' 

import {listCxt} from '../context/ToDoCxt' 





export const ToDoForm = () => { 

    const [todo,setTodo] = useState('')   

    const  { addToDo }  = useContext(listCxt) 


    const taskHandler = (e) => { 
        const task =e.target.value
        setTodo(task) 
    } 

    // console.log(todo); 


    const submitHandler = (e) => {

        e.preventDefault(); 

        const NewTask = { 
            
            id : Math.round(Math.random() *1000),   
            todo , 
        } 

        addToDo(NewTask) ;  

        console.log(NewTask);
    } 




    return ( 
        <div>

            <form onSubmit={submitHandler} >
                <input type="text" placeholder='Task ...' value={todo} onChange={taskHandler}  />
            </form>
      
            <button type='submit' > Add Task </button> 
        </div>
    )
}



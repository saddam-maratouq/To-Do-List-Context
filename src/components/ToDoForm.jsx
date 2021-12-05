import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react'
import  { useContext } from 'react' 

import {listCxt} from '../context/ToDoCxt' 
import useToDO from '../hook/useToDO'
import { v4 as uuidv4 } from 'uuid';


export const ToDoForm = () => { 

    const { todo , setTodo , getItem  , setItem  }  = useToDO() 

    const  { addToDo }  = useContext(listCxt) 


    const taskHandler = (e) => { 
        const task = e.target.value
        setTodo(task) 
    } 

    // console.log(todo); 


    const submitHandler = (e) => {

        e.preventDefault(); 

        const NewTask = { 

             id :  uuidv4(),          //  Math.round(Math.random() *1000),   
            todo , 
        } 

        addToDo(NewTask) ;  

        getItem();
        setItem(); 
       console.log(getItem())

        console.log(NewTask);
    } 




    return ( 
        <div>

            <form onSubmit={submitHandler} >
                <input type="text" placeholder='Task ...' value={todo} onChange={taskHandler}  />
            <button type='submit' > Add Task </button> 
            </form>
      
        </div>
    )
}



import  { useContext } from 'react' 

import {listCxt} from '../context/ToDoCxt' 
import useToDO from '../hook/useToDO'





export const ToDoForm = () => { 

    const { todo , setTodo , getItem  , setItem  }  = useToDO() 

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

        setItem(); 
        getItem();
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



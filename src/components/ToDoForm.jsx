
import  { useContext } from 'react' 
import {listCxt} from '../context/ToDoCxt' 
import {useLocalStorage} from '../hook/useLocalStorage';


export const ToDoForm = () => { 

    const { Tasks } = useContext(listCxt) 
    // console.log(Tasks); 

    const mission =  Tasks.map(task=> task.todo) 

    const  { addToDo }  = useContext(listCxt)  

    const [ todo , setTodo ]  = useLocalStorage('order', mission) 





    const taskHandler = (e) => { 
        const task = e.target.value
        setTodo(task)  
    } 

    // console.log(todo); 


    const submitHandler = (e) => {

        e.preventDefault(); 

        const NewTask = { 

             id : Math.round(Math.random() *1000),           //  Math.round(Math.random() *1000),   
            todo , 
        } 

       addToDo(NewTask)   ;  

    

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




import  { useContext, useState ,useEffect } from 'react' 
import {listCxt} from '../context/ToDoCxt' 



const LOCAL_STORAGE_KEY = "react-todo-list-todos";


export const ToDoForm = () => { 

    const { Tasks } = useContext(listCxt) 
    // console.log(Tasks); 

    // const mission =  Tasks.map(task=> task.todo) 

    const  { addToDo }  = useContext(listCxt)  

    const [ todo , setTodo ]  = useState([]) 




    useEffect(() => {
        // fires when app component mounts to the DOM
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
            setTodo(storageTodos);
        }
      }, []);


    
      useEffect(() => {
        // fires when todos array gets updated
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Tasks));
      }, [Tasks]);




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

       addToDo(NewTask);  

        setTodo('')

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



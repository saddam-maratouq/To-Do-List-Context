

import {useState , useEffect,useContext} from 'react' 

import {listCxt} from '../context/ToDoCxt'


const  LOCAL_STOREGE_KEY = 'react-todos'

const  useToDO = () =>  { 
 
    const [todo,setTodo] = useState([])   

    const { Tasks } = useContext(listCxt)


    const todo = Tasks.map( task =>  task.todo  )  






    const setItem = () => {

        localStorage.setItem( LOCAL_STOREGE_KEY, JSON.stringify(todo)) 
    }

   
    const getItem = () => {

        const StorgeItem =  JSON.parse(localStorage.getItem( LOCAL_STOREGE_KEY)) 

        console.log(StorgeItem);
    
        if (StorgeItem) {
            
            setTodo(StorgeItem) 
        }
    }
 


    useEffect(() => {
       
        getItem(); 
     
    }, [])   



     useEffect(() => {
       
          setItem(); 
         
        }, [todo])
        
        

     
    

  

    return { todo , setTodo , getItem  , setItem  } 
}

export default useToDO ;

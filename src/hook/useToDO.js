

import {useState , useEffect} from 'react' 


const  LOCAL_STOREGE_KEY = 'react-todos'

const  useToDO = () =>  { 
 
    const [todo,setTodo] = useState([])   



    const setItem = () => {

        localStorage.setItem( LOCAL_STOREGE_KEY, JSON.stringify(todo)) 
    }

   
    const getItem = () => {

        const StorgeItem =  JSON.parse(localStorage.getItem( LOCAL_STOREGE_KEY) ) 
    
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

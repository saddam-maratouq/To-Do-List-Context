import { createContext, useReducer } from "react"; 
import {Reducer} from './Reducer' 





const initialState = { 

    Tasks : {id : 1 , todo : 'cooking'} 
    

}

export const listCxt = createContext(initialState)  



 export const ListProvider = ( {children}) => { 

    const [state,dispatch] = useReducer(Reducer,initialState)  


    const addToDo  = (Tasks) => { 

        dispatch ({ 

            type : 'ADD_TODO' ,

            paylod : Tasks 
        })
    } 

  const value = { Tasks : state.Tasks , addToDo }

    return (
        
      <listCxt.Provider value={value}  > 
          {children}
      </listCxt.Provider >

    )
}


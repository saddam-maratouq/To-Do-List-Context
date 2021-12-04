import  { useContext } from 'react' 

import {listCxt} from '../context/ToDoCxt'

import ToDo from './ToDo'





  export const ToDoList = () => { 

    const { Tasks } = useContext(listCxt)

    return ( 

        <div>
            {
                Tasks.map( task => (

                    <ToDo  task={task} key={task.id}  /> 
                ))
            }
        </div>
    )
}




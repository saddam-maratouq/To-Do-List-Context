import './App.css';
import { ToDoForm } from './components/ToDoForm';
import {ToDoList} from './components/ToDoList';
import { ListProvider } from './context/ToDoCxt';

function App() {
  return ( 
 
    <div> 
     
   <h1> What the tasks today .... ? </h1> 

   <ListProvider> 
     <ToDoForm/>  
     <ToDoList/>

   </ListProvider> 

   

    </div>
    
    
    
  );
}

export default App; 

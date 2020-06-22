import React from 'react'
import {Plus,TodoList} from './TodoItem'
//import  PlusOne from './Experiments'

function Body(){
   
    
    
    return(
        <div className = "todo-list">
            
            <Plus/>
           
            <TodoList name= 'what to do today?'/>

            
         
         </div>
    );
}

export default Body;
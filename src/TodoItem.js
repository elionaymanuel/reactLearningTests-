import React from 'react'
import todosData from './todosData'



export function TodoItem (props){
    return(
        // tenho que mudar a id e o for da label dinamicamente
        <div className = "todo-item">
            <input type="checkbox" id={props.id} 
            onChange = {()=>props.handleChange(props.id)}
            checked = {props.completed}/>
            <label htmlFor={props.id} style = {props.stylish} >{props.text} </label>
        </div>
    )

}

export class TodoList extends React.Component{

    constructor (){
        super()
        this.state = {
            todos:todosData,
            total: todosData.length,
            todosDone: todosData.filter(element => element.completed === true).length

        }
        this.handleChange = this.handleChange.bind(this)
        
    }

    handleChange (id){
        this.setState(
            prevState => {
                const updadtedTodos =  prevState.todos.map(todo=>{
                   if(todo.id === id){
                       return{
                           ...todo,
                           completed:!todo.completed,
                           
                       }
                   }
                   return todo
                })
                
                return {todos: updadtedTodos,
                    todosDone: updadtedTodos.filter(
                        element => element.completed === true).length,
                    total:updadtedTodos.length
                }
                
            }
        )
    }
    
    makeLIst()
    {
       const styling ={
           textDecoration: "line-through",
           fontStyle: "italic",
           color: "#cdcdcd"

       }
        const vector = this.state.todos.map((element)=> <TodoItem 
                key = {element.id} id = {element.id}
                text = {element.text}
                handleChange = {this.handleChange}
                completed = {element.completed}
                stylish={
                    element.completed ? styling : null
                  }
                />)

                return vector;
    
    }

    
    render() {
        const list  =  this.makeLIst()
       
        return (
           <div>

            {list}

            <h1  className = "todo-done-total">
            {this.state.todosDone}
            /{this.state.total}
            </h1>
           

           </div>
                   

            )
    }
}



export class Plus extends React.Component{

  
    
   render ()
  
    {
       
        return (

      
           <div className="round-button">
            <div className="round-button-circle">
                <a href = 'google.com' className="round-button">+</a>
            </div>
           
        </div>

        
      
        
        
        
       
    )}
}

export default {TodoItem,Plus,TodoList};

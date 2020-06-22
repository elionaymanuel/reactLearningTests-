import React from 'react'

export class PlusOne extends React.Component{
    constructor(props){
            super(props)

            this.state = {
                value:1
            }

            this.operation = this.operation.bind(this);
    }

    operation (){
        this.setState (
            prevState => {
             return  ( {value: prevState.value*2})
            }
        )

       
    }



    render(){
       
       
        return(
                <PlusButton factor = {this.state.value} handleClick = {this.operation}/>
        )
    }
}

class PlusButton extends React.Component{
    
  
    render(){
        return(
            
        <button className = 'round-button' onClick = {this.props.handleClick}>

            {this.props.factor}

        </button>)
    }
}

export default PlusOne

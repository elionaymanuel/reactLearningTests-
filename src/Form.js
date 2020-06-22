import React from 'react'
import NavBar from './Header'
import Footer from './Footer'



export default class Form extends React.Component{
    constructor (props){
        super(props)

        this.state = {
            name: '',
            ocupation:'',
            is: true
        }

        this.handleChange =  this.handleChange.bind(this)
    }

    handleChange (event){
        //const {name,ocupation} = event.target
        event.target.type === 'checkbox'? 
        this.setState({
            [event.target.name]:event.target.checked
        }):
        this.setState (
            {
                [event.target.name]: event.target.value,
                [event.target.ocupation]: event.target.value
            }
        )
    }

render (){
    return (

        <div>
            <NavBar/>
            <br/><br/>
        <form action="">
            <input type="text"
            value = {this.state.name}
            name = 'name'
            placeholder = 'your name here'
            onChange = {this.handleChange}
            />
            <br/>
            <input type="text"
            value = {this.state.ocupation}
            name = 'ocupation'
            placeholder = 'your ocupation here'
            onChange = {this.handleChange}
            />
            
            <br />
            <textarea
            value={'some default value'}
            />
            <br/>
               
            <Footer/>
            
        </form>


            <h1>{this.state.name} is {this.state.ocupation}</h1>

            <label>
                    <input 
                        type="checkbox" 
                        name="is"
                        checked={this.state.is}
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>
        </div>
    )
}

}


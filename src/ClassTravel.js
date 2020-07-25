import React from 'react'
import NavBar from './Header'
import Form from './formTravelHTML'
export default class FormTravel extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            firstName: '',
            lastName:'',
            age: '',
            gender:'',
            destination:'Brasil',
            
            isLacFree:false,
            isVegan:false,
            isKosher:false
            
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit =  this.handleSubmit.bind(this)
    }

    handleChange(event){
            event.target.type === "checkbox"?
                this.setState ({
                    [event.target.name]:event.target.checked
                }):
        this.setState(
            {
               [event.target.name]: event.target.value,
              
                
            }
        )
    }

    handleSubmit (event){

        alert (
            this.state.firstName + ' ' +
            this.state.lastName+ ' ' +
            this.state.age+ ' ' +
           this.state.gender+ ' ' +
            this.state.destination+ ' ' +
            this.state.isKosher+ ' ' + this.state.isLacFree + ' ' + this.state.isVegan
            )
            event.preventDefault();
    }


    render(){
        return(
            <div>
                <NavBar/>
                <Form 
                firstName = {this.state.firstName}
                lastName = {this.state.lastName}
                age = {this.state.age}
                gender = {this.state.gender}
                destination={this.state.destination}
                isLacFree={this.state.isLacFree}
                isVegan={this.state.isVegan}
                isKosher={this.state.isKosher}
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
                />
                
            </div>
        )
    }
}
import React from 'react'
import NavBar from '../src/components/Header'
import Footer from '../src/components/Footer'
//import FormTravel from './FormTravel'



export default class Form extends React.Component{
    constructor (props){
        super(props)

        this.state = {
            name: '',
            ocupation:'',
            is: true,
            gender: '',
            favColor: 'pink'
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
                [event.target.ocupation]: event.target.value,
                [event.target.gender]:event.target.value,
                [event.target.favColor]:event.target.value
            }
        )
    }

render (){
    return (

        <div>
            <NavBar/>
            <br/><br/>
        <form action="">
            <br/>
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
            <br/>
            <br />
            <textarea
            value={'some default value'}
            />
            <br/>
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

                <br/>

                <label htmlFor="male">
                    <input type="radio"
                    name = 'gender'
                    value = 'male'
                    checked = {this.state.gender === 'male'}
                    onChange = {this.handleChange}
                    id = 'male'
                    /> male
                </label>
                <br/>

                <label htmlFor="female">
                    <input type="radio"
                    name = 'gender'
                    value = 'female'
                    checked = {this.state.gender === 'female'}
                    onChange = {this.handleChange}
                    id = 'female'
                    /> female
                </label>

                <h2> you are a {this.state.gender }   </h2>

                <br/>
                <label>choose your favorite color</label>
                <select  value =  {this.state.favColor}
                onChange = {this.handleChange}
                name = 'favColor'
                >

                    <option value="blue">blue</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="pink">pink</option>
                    <option value="yellow">yellow</option>
                </select>

    <h3>your favorite color is {this.state.favColor}</h3>

            
        </div>
    )
}

}


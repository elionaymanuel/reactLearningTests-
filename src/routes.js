import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import App from '../src/to-dos/TodoApp'
import MemeApp from './memeGenerator/MemeApp'
//import Form from './Form'
import FormTravel from '../src/formTravel/ClassTravel'

export default class Routes extends React.Component{
    constructor (){
        super()
        this.state ={

        }
    }
    
    
    render(){
        return(
            <BrowserRouter>

        <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/FormTravel" exact={true} component={FormTravel} />  
        <Route path="/ApiTest" exact={true} component={MemeApp} />
        </Switch>

   
    
    </BrowserRouter>
        )
    }
}
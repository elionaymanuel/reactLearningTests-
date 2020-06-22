import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import App from './App'
import ApiTest from './ApiTest'
import Form from './Form'

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
        <Route path="/Form" exact={true} component={Form} />  
        <Route path="/ApiTest" exact={true} component={ApiTest} />
        </Switch>

   
    
    </BrowserRouter>
        )
    }
}
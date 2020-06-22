import React from 'react'
import NavBar from './Header'
import Footer from './Footer'

class ApiTest extends React.Component {
    constructor (){
        super()
        this.state = {}
    }




    render(){
        return (
            <div>
                <NavBar/>
                hello world
                <Footer/>
            </div>
        )
    }
}

export default ApiTest
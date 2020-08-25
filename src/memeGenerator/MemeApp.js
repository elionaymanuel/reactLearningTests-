import React from 'react'
import NavBar from '../components/Header'
//import Footer from '../components/Footer'
import MemeGenerator from './MemeGenerator'
import Header from './Header'
import './style.css'

class MemeApp extends React.Component {
    constructor (){
        super()
        this.state = {
            

        }
    }

    



    render(){
        
        return (
            <div>
                <NavBar/>
                    <Header/>
                        <MemeGenerator >
                            ...     
                        </MemeGenerator>
                    
            </div>
        )
    }
}

export default MemeApp
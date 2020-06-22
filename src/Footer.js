import React from 'react'

class Footer extends React.Component{
        
        
        constructor(props){
                super (props);

                this.state= {
                    date: new Date()
                }

               // this.tick = this.tick.bind(this);
               // this.mount = this.mount.bind(this);
                //this.dismount = this.dismount.bind(this);
        }

        componentDidMount(){
            this.timerID = setInterval(
                ()=> this.tick(),
                1000
            )
        }

        componentWillUnmount(){
                clearInterval(this.timerID)
        }

        tick(){
            this.setState({
                date: new Date()
            })
        }
        
        greeting(hours){

            let timeOfDay = 'error';
            if(hours>0 && hours<12){
                timeOfDay = 'Morning';
            }if(hours>=12 && hours<18){
                //console.log('hora certa em brasolia: ' + hours);
                timeOfDay = 'Afternoon';
            }if(hours>=18 && hours <=24){
                
                timeOfDay = 'Night';
            }

            return timeOfDay;
        }

        render(){
        
        const hours = this.state.date.getHours();
       
        

        let timeOfDay = this.greeting(hours);
            

    return(
    <footer className = "footer"> Good {timeOfDay} : {this.state.date.toLocaleTimeString()}</footer>
    )}
}

export default Footer
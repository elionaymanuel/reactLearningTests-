import React,{Component} from 'react'


class MemeGenerator extends Component{
    constructor(props){
        super(props)
        this.state={
            topTxt:'',
            bottomTxt:'',
            randomImg:'http://i.imgflip.com/1bij.jpg',
            allMemeImgs:[]
        }

       // this.getImgs = this.getImgs.bind(this)
       this.handleChange = this.handleChange.bind(this)
       this.handleSubmit =  this.handleSubmit.bind(this)
    }

    

    componentDidMount (){
        fetch ('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                //console.log('aaaaa   url:' + memes[1].url)
                this.setState({allMemeImgs:memes})
            })

    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit(event){
        
        const hammy =(Math.floor( Math.random()*100)+1)
        console.log(`hammy = ${hammy}`)
        
        this.setState({
            randomImg:this.state.allMemeImgs[hammy].url
        })
        event.preventDefault()
    }

    render(props){
       console.log('randomImg:'+ this.state.randomImg)


        return(
            <div>
                <form className='meme-form' onSubmit = {this.handleSubmit}>
                    <input type="text" 
                    name = 'topTxt'
                    placeholder = 'top text'
                    value = {this.state.topTxt}
                    onChange = {this.handleChange}
                    />
                    <input type="text" 
                    name = 'bottomTxt' 
                    placeholder = 'bottom text'
                    value = {this.state.bottomTxt}
                    onChange = {this.handleChange}
                    />

                    <button onSubmit={this.handleSubmit}>Generate</button>
                </form>

                <div className = 'meme'>
                    <img src={this.state.randomImg} alt= '' />
                        <h2 className = 'top'>{this.state.topTxt}</h2>
                        <h2 className='bottom'>{this.state.bottomTxt}</h2>
                </div>
                    
            </div>
        )
    }
}

export default MemeGenerator
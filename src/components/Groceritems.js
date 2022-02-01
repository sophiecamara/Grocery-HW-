import React,{Component} from 'react'

class Groceritems extends Component{
    constructor(){
        super()
        this.state ={
            item:'',
            units:'',
            quantity:'',
            isPurchased:''
        }
    }
saveInfo = addItems=>{
    this.setState({[addItems.target.id]:addItems.target.value})

}
deleteInfo = removeItems=>{
this.setState({[removeItems.target.id]:removeItems.target.value})
}
submitButton=event=>{
    event.preventDefault()
    console.log(this.state)
    this.props.getList(this.state) //send event info to getlist prop on app.js( how to save)
}

    render(){
        return(
            <div>
                <h2>Groceries App</h2>
                <form onSubmit={this.submitButton}>
                    <label htmlFor='item' >item</label>
                        <input id='item' placeholder='Type Here'
                        onChange={this.saveInfo}
                        value={this.state.item}/>
                
                        <label htmlFor='units'>units</label>
                        <input id="units" placeholder='Type Here'
                        onChange={this.saveInfo}
                        value={this.state.units}/>
                        
                    
                    <label htmlFor='quantity'>quantity</label>
                        <input id='quantity' placeholder='Type Here'
                        onChange={this.saveInfo}
                        value={this.state.quantity}/>
                        
                    
                    <button type="submit">Add item</button>
                    <button onClick="remove">Delete</button>

                </form>
            </div>
        )
    }
}
export default Groceritems;

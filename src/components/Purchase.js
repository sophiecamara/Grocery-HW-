

import React, { Component } from "react";

class Purchase extends Component {
    constructor(props){
    super(props)

    this.state={
        isPurchased: "true"
    }
}
render() {

return this.state.isPurchased ?(
       <div>Is Purchased</div> 
) :(
    <div>Not paid</div>
)  
}      
}
 export default Purchase;               
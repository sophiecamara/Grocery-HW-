import React, { Component } from "react";

class GrocerList extends Component {
     
render() {

return (

<div className="GrocerListMain">
    
    <ul>
         {this.props.getGroceries.map((listItems,index)=> {
         return <div key={index}>{listItems.item}{listItems.units}{listItems.quantity}</div>
       }
       )}
      </ul>
    
  </div>

);
}
}
export default GrocerList;
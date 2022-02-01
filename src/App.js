import Groceritems from './components/Groceritems';
import React, { Component } from 'react';
import GrocerList from './components/GrocerList';
import Purchase from './components/Purchase';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      grolist: [],
    }
  }
  getList = (list) => {
    this.setState({ grolist: [...this.state.grolist, list] })
  }

  render() {
    return (
      <div className="App">
        <Groceritems getList={this.getList} />
        <GrocerList getGroceries={this.state.grolist} />
      </div>
    )
  }
}
export default App;


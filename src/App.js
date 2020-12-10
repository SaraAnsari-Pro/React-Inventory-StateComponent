import React, { Component } from 'react';
import InventoryJacket from './Inventory/InventoryJacket';
import InventorySocks from './Inventory/InventorySocks';
import InventoryPants from './Inventory/InventoryPants';
import InventorySnowSet from './Inventory/InventorySnowSet';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'welcome'
    }
  }
  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        data: 'WELCOME TO INVENTORY WEBSITE'
      })
    }, 1000)
  }

  componentDidMount(){
    this.getData();
  }

  componentDidUpdate(){
    console.log("componentDidUpdate",this.state.data)
  }


  render() {

    return (
      <div className="container">
        
        <h1>Stock Inventory</h1>
        
        <hr></hr>

        <div className="items">
          <InventoryJacket />
          <InventorySocks />
          <InventoryPants />
          <InventorySnowSet />
         
        </div>
        <hr></hr>
        {/* using componentDidMount */}
        <div> <h1>{this.state.data} </h1></div> 
        <hr></hr>
      </div>
    )
  }
}

export default App;

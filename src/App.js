import React, { Component } from 'react';
import InventoryJacket from './Inventory/InventoryJacket';
import InventorySocks from './Inventory/InventorySocks';
import InventoryPants from './Inventory/InventoryPants';
import InventorySnowSet from './Inventory/InventorySnowSet';

import './App.css';

class App extends Component {
  componentDidMount() {

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
      </div>
    )
  }
}

export default App;

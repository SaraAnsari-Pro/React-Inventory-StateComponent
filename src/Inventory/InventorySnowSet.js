import React, { Component } from 'react';
import SnowSet from "./SnowSet.jpg";
import './Inventory.css';


class InventorySnowSet extends Component{
    constructor(props){
        super(props);
        this.state={
            availableSet: 50,
            soldSet:4
        }
        // this.addButton = this.addButton.bind(this);
        // this.minusButton = this.minusButton.bind(this);
        this.resetButton = this.resetButton.bind(this);
        this.buttonAction = this.buttonAction.bind(this);

        
    
    }

buttonAction (changest){
    if(changest === "plus"){
        this.setState({
            availableSet: this.state.availableSet -2,
            soldSet: this.state.soldSet + 2
        });
    }
    else{
        this.setState({
            soldSet: this.state.soldSet - 2,
            availableSet: this.state.availableSet -2
        });
    }
}
    resetButton() {
        this.setState({
            soldSet: 4,
            availableSet: 90
        });
    }
   
    render(){
        return(
            <div className="containerInventory">
            <div className="Style">
            <img src={SnowSet} alt="SnowSet" />
            <h3>Available Snow Sets: {this.state.availableSet}</h3>
            <h4>Sold Snow Sets: {this.state.soldSet}</h4>
            <div className="addMinus">
                <button onClick={() => this.buttonAction("plus")}> + </button>
                <button onClick={() => this.buttonAction("minus")}> - </button>
            </div>
            <button onClick={() => this.resetButton()}> Reset </button>
        </div>
        
        </div>
        


        )
    }
}

export default InventorySnowSet;
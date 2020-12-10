import React, { Component } from 'react';
import Socks from "./Socks.jpg"
import './Inventory.css'

class InventorySocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SocksCount: 90,
            soldCount: 1
        }
        //  console.log("constructor", this)

        this.addButton = this.addButton.bind(this);
        this.minusButton = this.minusButton.bind(this);
        this.resetButton = this.resetButton.bind(this);
    
    }

    addButton() {

        this.setState({

            soldCount: this.state.soldCount + 1,
            SocksCount: this.state.SocksCount - 6

        })

    }

    minusButton() {
        this.setState({

            soldCount: this.state.soldCount - 1,
            SocksCount: this.state.SocksCount + 6


        });

    }

    resetButton() {
        this.setState({
            soldCount: 1,
            SocksCount: 90
        })

    }

    render() {
        return (
            <div className="containerInventory">
                <div className="Style">
                <img src={Socks} alt="Socks" />
                <h3>Available Socks: {this.state.SocksCount}</h3>
                <h4>Sold Socks: {this.state.soldCount}</h4>
                <div className="addMinus">
                    <button onClick={() => this.addButton()}> + </button>
                    <button onClick={() => this.minusButton()}> - </button>
                </div>
                <button onClick={() => this.resetButton()}> Reset </button>
            </div>
            </div>
        )
    }

}
export default InventorySocks;



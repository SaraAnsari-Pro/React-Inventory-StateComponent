import React, { Component } from 'react';
import Red from "./Red.jpg"
import './Inventory.css'

class InventoryJacket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 100,
            soldCount: 0
        }
        //  console.log("constructor", this)

        this.addButton = this.addButton.bind(this);
        this.minusButton = this.minusButton.bind(this);
        this.resetButton = this.resetButton.bind(this);
    }

    addButton() {

        this.setState({

            soldCount: this.state.soldCount + 1,
            count: this.state.count - 1

        })

    }

    minusButton() {
        this.setState({

            soldCount: this.state.soldCount - 1,
            count: this.state.count + 1


        });

    }

    resetButton() {
        this.setState({
            soldCount: 0,
            count: 100
        })

    }

    render() {
        return (
            <div className="containerInventory">
                <div className="Style">
                <img src={Red} alt="Jacket" />
                <h3>Available Jackets: {this.state.count}</h3>
                <h4>Sold Jackets: {this.state.soldCount}</h4>
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
export default InventoryJacket;



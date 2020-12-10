import React, { Component } from 'react';
import Pant from './Pant.jpg';
import './Inventory.css';

class InventoryPants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availablePants: 50,
            soldPants: 2

        }

        this.addButton = this.addButton.bind(this);
        this.minusButton = this.minusButton.bind(this);
        this.resetButton = this.resetButton.bind(this);
    }


    addButton() {

        this.setState({

            soldPants: this.state.soldPants + 1,
            availablePants: this.state.availablePants - 1

        })

    }

    minusButton() {
        this.setState({

            soldPants: this.state.soldPants - 1,
            availablePants: this.state.availablePants + 1


        });

    }

    resetButton() {
        this.setState({
            soldPants: 0,
            availablePants: 0
        })

    }

    render() {
        return (

            <div className="containerInventory">
                <div className="Style">
                    <img src={Pant} alt="Pants" />
                    <h3>Available Pants: {this.state.availablePants}</h3>
                    <h4>Sold pants: {this.state.soldPants}</h4>

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
export default InventoryPants;
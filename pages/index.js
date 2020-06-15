import React from 'react';
import BudgetItem from '../components/BudgetItem';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            budgetedItems: [],
            itemValue: 0,
            itemName: '',
            monthlyTotal: 0,
            valueErrorMessage: '',
            nameErrorMessage: ''
        }

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleValueChange(event) {
        this.setState({ itemValue: event.target.value });
    }

    handleNameChange(event) {
        this.setState({ itemName: event.target.value });
    }

    addItem = (event) => {
        event.preventDefault();
        //if parsed value from user is not a number
        if (isNaN(parseFloat(this.state.itemValue)) || (this.state.itemValue === 0)) {
            //set error message
            this.setState({ valueErrorMessage: "Please enter a number." })
        }
        if (!this.state.itemName.length) {
            this.setState({ nameErrorMessage: "Please enter a name." })
        }
        if (!isNaN(parseFloat(this.state.itemValue)) && (this.state.itemValue != 0) && this.state.itemName.length) {
            let itemArr = this.state.budgetedItems;

            itemArr.push({
                name: this.state.itemName,
                monthlyCost: this.state.itemValue
            })

            this.getMonthlyTotal();
            this.setState({ budgetedItems: itemArr, itemValue: '', itemName: '', valueErrorMessage: '', nameErrorMessage: '' })
        }
    }

    getMonthlyTotal = () => {
        let monthlyTotal = 0;

        this.state.budgetedItems.map(item => {
            monthlyTotal = monthlyTotal + parseFloat(item.monthlyCost);
        })

        this.setState({ monthlyTotal: monthlyTotal })
    }

    render() {
        return (
            <div>
                <h1>Next Budget</h1>

                <form onSubmit={this.addItem}>
                    <label>
                        Name:
                        <input type="text" placeholder="Mortgage" value={this.state.itemName} onChange={this.handleNameChange} />
                        <div style={{color: "red"}}>{this.state.nameErrorMessage || ''}</div>
                    </label>
                    <br></br>
                    <label>
                        Monthly Cost: $
                        <input type="text" placeholder="1200" value={this.state.itemValue} onChange={this.handleValueChange} />
                    </label>
                    <input type="submit" value="Submit" />
                    <div style={{color: "red"}}>{this.state.valueErrorMessage || ''}</div>
                </form>

                <h1>Your monthly expenses:</h1>
                <ul>
                    {this.state.budgetedItems.map((item, index) => (
                        <li key={index}>{item.name}: ${item.monthlyCost}</li>
                    ))}
                </ul>

                <h1>Monthly total: ${this.state.monthlyTotal}</h1>

            </div>
        )
    }
}

export default Home;
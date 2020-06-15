import React from 'react';
import BudgetItem from '../components/BudgetItem';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            budgetedItems: [],
            itemValue: '',
            itemName: ''
        }
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addItem = () => {

    }
    handleValueChange(event) {
        this.setState({ itemValue: event.target.value });
    }
    handleNameChange(event) {
        this.setState({ itemName: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h1>Next Budget</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.itemName} onChange={this.handleNameChange} />
                    </label>
                    <br></br>
                    <label>
                        Value:
                        <input type="text" value={this.state.itemValue} onChange={this.handleValueChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Home;
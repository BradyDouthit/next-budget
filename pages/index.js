import React from 'react';
import { Jumbotron, Button, Input, Label, Form, FormGroup, FormFeedback, FormText } from 'reactstrap';
import '../css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            budgetedItems: [],
            itemValue: 0,
            itemName: '',
            monthlyTotal: 0,
            valueErrorMessage: false,
            nameErrorMessage: false,
            nameValid: true,
            valueValid: true

        }

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleValueChange(event) {
        //if parsed value from user is not a number
        if (isNaN(parseFloat(this.state.itemValue)) || (this.state.itemValue === 0)) {
            //set error message
            this.setState({ valueErrorMessage: true })
        }
        else {
            this.setState({valueErrorMessage: false })
        }
        this.setState({ itemValue: event.target.value });
    }

    handleNameChange(event) {
        //if the value is an empty string
        if (this.state.itemName.length) {
            this.setState({ nameErrorMessage: false })
        }
        else {
            this.setState({nameErrorMessage: true })
        }
        this.setState({ itemName: event.target.value });
    }

    addItem = (event) => {
        event.preventDefault();
        //if parsed value from user is not a number
        if (isNaN(parseFloat(this.state.itemValue)) || (this.state.itemValue === 0)) {
            //set error message
            this.setState({ valueErrorMessage: true })
        }
        //if the value is an empty string
        if (!this.state.itemName.length) {
            this.setState({ nameErrorMessage: true })
        }
        //if value is a number and greater than 0, and name is not an empty string
        if (!isNaN(parseFloat(this.state.itemValue)) && (this.state.itemValue > 0) && this.state.itemName.length) {
            let itemArr = this.state.budgetedItems;

            itemArr.push({
                name: this.state.itemName,
                monthlyCost: this.state.itemValue
            })

            this.getMonthlyTotal();
            this.setState({ budgetedItems: itemArr, itemValue: '', itemName: '', valueErrorMessage: false, nameErrorMessage: false })
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
            <div id="main-content">
                <Jumbotron>
                    <h1 className="display-3">Next Budget</h1>
                    <p className="lead">Simply enter your monthly expenses and names, the app will figure out the total cost of your bills.</p>
                    <hr className="my-2"></hr>
                    <Form onSubmit={this.addItem}>
                        <FormGroup>
                            <Label>Name:</Label>
                            <Input type="text" 
                                    placeholder="Mortgage" 
                                    value={this.state.itemName} 
                                    onChange={this.handleNameChange}
                                    valid={!this.state.nameErrorMessage}
                                    invalid={this.state.nameErrorMessage} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Monthly Cost: ${this.state.monthlyTotal}</Label>
                            <Input type="text" 
                                    placeholder="1200" 
                                    value={this.state.itemValue} 
                                    onChange={this.handleValueChange}
                                    valid={!this.state.valueErrorMessage}
                                    invalid={this.state.valueErrorMessage} />
                        </FormGroup>
                        <Button color="primary" type="submit">Submit</Button>
                        <hr className="my-2"></hr>
                    </Form>
                    <h1>Your monthly expenses:</h1>
                    <ul>
                        {this.state.budgetedItems.map((item, index) => (
                            <li key={index}>{item.name}: ${item.monthlyCost}</li>
                        ))}
                    </ul>
                    <h1>Monthly total: ${this.state.monthlyTotal}</h1>
                </Jumbotron>
            </div>
        )
    }
}

export default Home;
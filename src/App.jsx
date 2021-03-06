import React, { Component } from 'react'
import './App.css'
import Clock from './Clock'
import { Form, FormControl, Button } from 'react-bootstrap'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: '2020-05-08'
        }
    }

    changeDeadline() {
        this.setState({
            deadline: this.state.newDeadline
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline} />
                <Form>
                    <FormControl className="dateInput col-6" type="date" onChange={event => this.setState({ newDeadline: event.target.value })} />
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>
            </div>
        )

    }
}

export default App;
import React, {Component} from 'react';
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import {dbAddress} from './db';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
    state = {
        message: '',
        type: 'info',
        active: true
    };
    isActive = () => !this.state.active;
    onSubmit = async event => {
        event.preventDefault();
        const {message, type} = this.state;
        this.setState({active: false});
        if (this.state.message)
            await fetch(dbAddress, {
                /* fetchillä pyyntö tietokantaan */
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    message,
                    timeStamp: Date.now(),
                    type
                }) /* tässä voidaan antaa myös muita tieoja kuten aikaleima */
            });
        this.setState({message: '', active: true});
        /* nollatan message lähetyksen jälkeen */
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <FormGroup>
                    <ControlLabel>Message</ControlLabel>
                    <FormControl
                        disabled={this.isActive()}
                        type="text"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={event => this.setState({message: event.target.value})}
                    />
                </FormGroup>
                <div>
                    <label>
                        Tyyppi:
                        <select value={this.state.type} onChange={event => this.setState({type: event.target.value})}>
                            <option value="success"> success</option>
                            <option value="warning"> warning</option>
                            <option value="danger"> danger</option>
                            <option value="info"> info</option>
                        </select>
                    </label>
                </div>

                <Button disabled={this.isActive()} bsStyle="primary" type="submit" block>
                    Submit
                </Button>
            </form>
        );
    }
}

export default App;

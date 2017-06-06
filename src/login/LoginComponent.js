import React, { Component } from 'react';
import '../App.css';

class LoginForm extends Component
{
    constructor(props) {
        super(props);
        this.state = {userName: '', passWord: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({[name]: event.target.value});
    }

    handleSubmit(event) {
        alert('userName: ' + this.state.userName+'\n password: '+ this.state.passWord);

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/*<label>*/}
                    {/*UserName:*/}
                    {/*<input name="userName" type="text" value={this.state.value} onChange={this.handleChange} />*/}
                {/*</label>*/}
                <UserNameLabel name="userName"/>
                <label>
                    PassWord:
                    <input name="passWord" type="password" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class UserNameLabel extends Component
{
    constructor(props) {
        super(props);
        this.state = {userName: ''};

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({userName: event.target.value});
    }
    render() {
    return (
        <label>
            UserName:
            <input name="userName" type="text" value={this.state.userName} onChange={this.handleChange} />
        </label>
    );
    }
}

export {LoginForm};
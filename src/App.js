import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
// import Blog from './learn/blog';
// import NameForm from "./learn/nameForm";
// import {LoginForm} from "./login/LoginComponent";
import RegisterForm from './register/component'
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {

    render() {
        return (
            <RegisterForm/>
        );
    }
}

class MyForm extends Component{
    render()
    {
        return (
            <form>
                魔灵星级：<input id="star" type="text" name="star" />
                当前等级：<input id="curLevel" type="text" name="curLevel"/>
                当前经验：<input id="curExp" type="text" name="curExp"/>
                战斗经验：<input id="fightExp" type="text" name="fightExp"/><br/>
                <input type="button" onClick={this.handleClick} value="计算"/>
            </form>
        );
    }
    handleClick()
    {
        let postData = {
            star: $('#star').val(),
            curLevel: $('#curLevel').val(),
            curExp: $('#curExp').val(),
            fightExp: $('#fightExp').val(),
        };
        fetch('http://localhost:18888/fighttime', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        }).then(function(response) {
            return response.json();
        }).then(function (data) {
            alert(data);
        }).catch(function (err) {
            alert('跪了');
        });
    }
}



export default App;

import React, {Component} from 'react';
import {UserNameInput, PassWordInput,PDCButton} from '../common/component/input';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {userName: '', passWord: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputPassWord = this.handleInputPassWord.bind(this);
        this.handleInputUserName = this.handleInputUserName.bind(this);
    }

    handleInputPassWord(newPassWord) {
        this.setState({passWord: newPassWord});
    }

    handleInputUserName(newUserName) {
        this.setState({userName: newUserName});
    }

    handleSubmit(event) {
        alert('userName: ' + this.state.userName + '\n password: ' + this.state.passWord);

        event.preventDefault();
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit} className="form-horizontal">

                <UserNameInput id="username" className="form-control" handleInputChange={this.handleInputUserName}/>
                <PassWordInput id="password" className="form-control" handleInputChange={this.handleInputPassWord}/>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <div className="checkbox">
                            <label><input type="checkbox"/>Remember me</label>
                        </div>
                    </div>
                </div>
                <PDCButton text="提交" handleClick={this.handleSubmit}/>
            </form>
        );
    }
}

export {LoginForm};
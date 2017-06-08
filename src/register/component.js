import React, {Component} from 'react';
import {UserNameInput, PassWordInput, PDCButton} from '../common/component/input';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {userName: '', passWord: '', ok: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputPassWord = this.handleInputPassWord.bind(this);
        this.handleInputPassWord2 = this.handleInputPassWord2.bind(this);
        this.handleInputUserName = this.handleInputUserName.bind(this);
    }

    handleInputPassWord(newPassWord) {
        this.setState({passWord: newPassWord});
    }

    handleInputPassWord2(newPassWord) {
        if (newPassWord === this.state.passWord)
            this.setState({ok: true});
        else
            this.setState({ok: false});
    }

    handleInputUserName(newUserName) {
        this.setState({userName: newUserName});
    }

    handleSubmit(event) {
        if (this.state.ok === true)
            alert("ok");
        if (this.state.ok === false)
            alert('not ok');

        // event.preventDefault();
    }

    render() {
        return (

            <div className="form-horizontal">
                <UserNameInput id="username" className="form-control" handleInputChange={this.handleInputUserName}/>
                <PassWordInput id="password1" className="form-control" handleInputChange={this.handleInputPassWord}/>
                <PassWordInput id="password2" className="form-control" handleInputChange={this.handleInputPassWord2}/>
                <PDCButton text="提交" handleClick={this.handleSubmit}/>
            </div>

        );
    }
}

export default RegisterForm;



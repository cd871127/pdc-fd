import React, {Component} from 'react';
import '../App.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {userName: '', passWord: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePassWord = this.handleChangePassWord.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
    }

    handleChangePassWord(newPassWord) {
        this.setState({passWord: newPassWord});
    }

    handleChangeUserName(newUserName) {
        this.setState({userName: newUserName});
    }

    handleSubmit(event) {
        alert('userName: ' + this.state.userName + '\n password: ' + this.state.passWord);

        event.preventDefault();
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit} className="form-horizontal" role="form">
                <div className="form-group">
                    <label htmlFor="username" className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                        <UserNameInput id="username" className="form-control"
                                       handleInputChange={this.handleChangeUserName}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-10">
                        <PassWordInput id="password" className="form-control"
                                       handleInputChange={this.handleChangePassWord}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <div className="checkbox">
                            <label><input type="checkbox"/>Remember me</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default">Sign in</button>
                    </div>
                </div>
            </form>

            // <form onSubmit={this.handleSubmit} className="form-horizontal">
            //     <label>
            //         UserName:
            //     </label>
            //     <UserNameInput handleInputChange={this.handleChangeUserName}/>
            //
            //     <label>
            //         PassWord:
            //     </label>
            //     <PassWordInput handleInputChange={this.handleChangePassWord}/>
            //     <input type="submit" value="登录"/>
            //
            // </form>
        );
    }
}

class LoginInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleInputChange(e.target.value);
    }
}

class UserNameInput extends LoginInput {
    render() {
        return (
            <input type="text" id={this.props.id} className={this.props.className} onChange={this.handleChange}/>
        );
    }
}

class PassWordInput extends LoginInput {
    render() {
        return (
            <input type="password" id={this.props.id} className={this.props.className} onChange={this.handleChange}/>
        );
    }
}


export {LoginForm};
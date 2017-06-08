import React, {Component} from 'react';

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
        <div className="form-group">
            <label htmlFor={this.props.id} className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
                <input type="text" id={this.props.id} className={this.props.className} onChange={this.handleChange}/>
            </div>
        </div>

        );
    }
}

class PassWordInput extends LoginInput {
    render() {
        return (
        <div className="form-group">
            <label htmlFor={this.props.id} className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
                <input type="password" id={this.props.id} className={this.props.className} onChange={this.handleChange}/>
            </div>
        </div>

        );
    }
}

class PDCCheckBox extends Component{
    render(){
        return (
            <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
                <div className="checkbox">
                    <label><input type="checkbox"/>Remember me</label>
                </div>
            </div>
        </div>
        );
    }
}

class PDCButton extends Component
{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <input type="button" className="btn btn-default" value={this.props.text} onClick={this.props.handleClick}/>
                </div>
            </div>
        );
    }
}

export {UserNameInput,PassWordInput,PDCButton};
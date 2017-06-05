import React, { Component } from 'react';
import '../App.css';

class Login2 extends Component {

    constructor(props){

        super(props);

    }

    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

Login2.defaultProps = { name: 'ccccdddd' };

export default Login2;
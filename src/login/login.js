import React, { Component } from 'react';
import '../App.css';

class MyC extends Component {

    render() {
        let i="1231232";
        return (
            <div>
                <MyB name={i}/>
            </div>
        );
    }
}

class MyB extends Component{

    constructor(props){
        super(props);
        this.state={
            liked: false
        }
    };
    handleClick(){
        this.setState({liked: !this.state.liked}).bind(this);
    };

    render(){
        let text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            <div>
                <h1 onClick={this.handleClick}>1234</h1>
                <h1>{text}</h1>
            </div>
        );
    };
}

export default MyC;
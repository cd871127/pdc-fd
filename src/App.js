import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit3 <code>src/App.js</code> and save to reload.
//         </p>
//         <Hello />
//       </div>
//
//     );
//   }
// }

class App extends Component {
  render() {
    return (
        <MyForm />
    );
  }
}

class MyForm extends Component{
    render()
    {
        return (
            <form>
                魔灵星级：<input id="star" type="text" name="star"/>
                当前等级：<input id="curLevel" type="text" name="curLevel"/>
                当前经验：<input id="curExp" type="text" name="curExp"/>
                战斗经验：<input id="fightExp" type="text" name="fightExp"/><br/>
                <input type="button" onClick={this.handleClick} value="计算"/>
            </form>
        );
    }
    handleClick()
    {
        let star=$('#star').val();
        let curLevel=$('#curLevel').val();
        let curExp=$('#curExp').val();
        let fightExp=$('#fightExp').val();

        let settings = {
            type: "GET",
            url: "45.62.117.196:18888/fighttime",
            async: true,
            data: {
                star: star,
                curLevel: curLevel,
                curExp: curExp,
                fightExp: fightExp,
            },
            success: function (data) {
                alert(data);
            },
            error: function()
            {
              alert('跪了');
            },
        };
        $.get(settings);

    }
}



export default App;

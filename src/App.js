import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{
  state = {
    userNames:[
      {username: 'szhan'}, 
      {username: 'aisulubn'}
    ]
  }

  changeUserNameHandler = (event) =>{
    this.setState({
      userNames:[
        {username: event.target.value}, 
        {username: event.target.value}
      ]
    })
  }

  render(){
    const style = {
      backgroundColor:'green',
      cursor: 'pointer',
      padding: '5px', 
      border: '1px solid white',
      borderRadius:'5px'
    }

    return (
      <div className="App">
        <UserOutput 
        username = {this.state.userNames[0].username}/>
        <UserInput
        changed = {this.changeUserNameHandler}
        username = {this.state.userNames[0].username}/>
        <UserOutput username = {this.state.userNames[1].username}/>
        <UserInput
        changed = {this.changeUserNameHandler}
        username = {this.state.userNames[0].username}/>
        <button style = {style}>Apply</button>
      </div>
    );

  }
}

export default App;

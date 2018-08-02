import React, { Component } from "react";
import "./App.css";
import "./UserInput/UserInput.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    users: [
      { username: "gattinger" },
      { username: "superpixel" }
    ]
  };

  insertUsernameHandler = (event) => {
    this.setState({
      users: [
        { username: "gattinger" },
        { username: event.target.value }
      ]
    });
  }

  render() {
    const style={
      backgroundColor: '#ccc',
      width: '30%',
      margin: '10px auto',
      padding: '20px',
      boxShadow: '0 2px 3px #ccc',
      border: '1px solid #eee'
    }

    return (
      <div className="App">
        <UserInput changed={this.insertUsernameHandler} username={this.state.users[1].username}/>
        <UserOutput style={style} username="bobbylinux" />
        <UserOutput style={style} username={this.state.users[0].username} />
        <UserOutput style={style} username={this.state.users[1].username} />
      </div>
    );
  }
}

export default App;

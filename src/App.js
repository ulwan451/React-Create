import React, { Component } from "react";
import './App.css';
import List from "./container/List";
import Form from "./container/Form";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          email: "frontend@gmail.com", 
          password: "12345"
        },
        {
          email: "backend@gmail.com", 
          password: "54321"
        },
        {
          email: "fullstack@gmail.com", 
          password: "76858"
        },
      ]
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeText(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email,password, data } = this.state;
    if (email === undefined || email === "") {
      alert("Email kosong");
    } else {
      data.push({ email,password });
      this.setState({
        data,
        email: "",
        password: ""
      });
    }
  }

  render() {
    const { email,password } = this.state;
    return (
      <div className="App">
        <div className="input" >
        <Form
          onChange={this.onChangeText}
          username={email}
          password={password}
          onSubmit={this.onSubmit}
        />
        </div>
        <List data={this.state.data} />
      </div>
    );
  }
}

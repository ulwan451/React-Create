import React, { Component } from "react";
import { Button, Form, Input } from "../components/Form";
import '../App.css';

class FormContainer extends Component {
  render() {
    return (
      <div>
        <p>Email :</p>
      <Form onSubmit={this.props.onSubmit}>
        <Input
          type="email"
          name="email"
          onChange={this.props.onChange}
          value={this.props.username}
        />
        <br></br>
        <p>Password :</p>
        <Input
          type="password"
          name="password"
          onChange={this.props.onChange}
          value={this.props.password}
        />
        <Button textButton="Push" />
      </Form>
      </div>  
    );
  }
}

export default FormContainer;

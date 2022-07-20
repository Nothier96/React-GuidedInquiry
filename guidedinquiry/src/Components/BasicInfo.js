import React, { Component } from "react";
class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        name: this.props.person.name,
        address: this.props.person.address,
      },
    };
  }
  state = {};
  render() {
    return (
      <div>
        <h1>{this.state.person.name}</h1>
        <p> {this.state.person.phone}</p>
      </div>
    );
  }
}

export default BasicInfo;

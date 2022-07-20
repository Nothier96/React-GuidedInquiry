import React, { Component } from "react";
import BasicInfo from "./BasicInfo";
let student = [
  {
    name: "Thierno",
    address: "Charlotte",
  },
  {
    name: "Diego",
    address: "Charlotte",
  },
  {
    name: "Oscar",
    address: "Atlanta",
  },
];
function returnStudent(arr) {
  return arr.map((student) => {
    return <BasicInfo student={student} />;
  });
}
class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {},
    };
  }
  state = {};
  render() {
    return (
      <div>
        returnStudent(student)
        {/* <h1>Thierno Sissoko</h1>
        <p>1712 termini drive</p>
        <p>08/20/1996</p>
        <p>Junior Software Engineer</p> */}
      </div>
    );
  }
}

export default AppClass;

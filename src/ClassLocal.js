import React, { Component } from "react";

class ClassLocal extends Component {
  id = 1;

  setId = (n) => {
    this.id = n;
  };

  printId = () => {
    console.log(this.id);
  };

  render() {
    return (
      <div>
        ClassLocal
        {(this.printId(), this.setId(15), this.printId())}
      </div>
    );
  }
}
export default ClassLocal;

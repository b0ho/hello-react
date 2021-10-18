import React, { Component } from "react";

class Ref extends Component {
  inputA = React.createRef();

  handleFocus = () => {
    this.inputA.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.inputA} />
        <input
          ref={(ref) => {
            this.inputB = ref;
          }}
        />
      </div>
    );
  }
}

export default Ref;

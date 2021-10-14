import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
    number2: 0,
    number3: 0,
    number4: 0,
  };
  render() {
    const { number, fixedNumber, number2, number3, number4 } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
        <h1>{number2}</h1>
        <button
          onClick={() => {
            this.setState({ number2: number2 + 1 });
            this.setState({ number2: number2 + 1 });
          }}
        >
          +1
        </button>
        <h1>{number3}</h1>
        <button
          onClick={() => {
            this.setState({ number3: number3 + 1 });
            this.setState((prevState) => ({
              number3: prevState.number3 + 1,
            }));
            this.setState((prevState) => ({
              number3: prevState.number3 + 1,
            }));
          }}
        >
          +1
        </button>
        <h1>{number4}</h1>
        <button
          onClick={() => {
            this.setState({ number4: number4 + 1 }, () => {
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

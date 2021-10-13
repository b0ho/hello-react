import PropTypes from "prop-types";
import React, { Component } from "react";

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        새로운 컴포넌트 {name} 입니다.
        <br />
        children 은 {children} 입니다.
        <br />이 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "기본",
};

MyComponent.propType = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;

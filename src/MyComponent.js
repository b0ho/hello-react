import PropTypes from "prop-types";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      새로운 컴포넌트 {name} 입니다.
      <br />
      children 은 {children} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본",
};

MyComponent.propType = {
  name: PropTypes.string,
};
export default MyComponent;

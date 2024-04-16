import React from "react";
import PropTypes from "prop-types";

const TestComponent = ({ name, children }) => {
  return (
    <div>
      name: {name}
      <br />
      children: {children}
    </div>
  );
};

TestComponent.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string.isRequired,
};

TestComponent.defaultProps = {
  children: "default name",
};

export default TestComponent;

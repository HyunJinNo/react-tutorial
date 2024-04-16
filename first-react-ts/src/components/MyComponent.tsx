import React from "react";

type MyProps = {
  name: string;
  optional?: string;
  children: string;
};

const MyComponent = ({ name, optional, children }: MyProps) => {
  return (
    <div>
      props.name: {name}! <br />
      props:children: {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "default name",
  children: "default children",
};

export default MyComponent;

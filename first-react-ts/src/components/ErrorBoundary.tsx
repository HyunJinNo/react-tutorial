import React, { useState } from "react";

type MyProps = {
  children: JSX.Element;
};

const ErrorBoundary = ({ children }: MyProps) => {
  const [error, setError] = useState(false);
  const componentDidCatch = (error: boolean, info: string) => {
    setError(error);
    console.log({ error, info });
  };

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  } else {
    return children;
  }
};

export default ErrorBoundary;

import React from "react";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const StartButton = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export { Button, StartButton };

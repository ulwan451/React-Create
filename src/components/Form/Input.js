import React from "react";
import '../List/List.css';

const Input = ({ type, onChange, value, name }) => (
  <input type={type} onChange={onChange} value={value} name={name}  className="inputan" />
);

export default Input;

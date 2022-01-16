import React from "react";
import "./InputComponent.css";
import { FiAlignLeft } from "react-icons/fi";

const InputComponent = ({ icon, OnChangeText, value }) => {
  return (
    <>
      {icon && <FiAlignLeft size="30" />}
      <input
        placeholder="Please Add Task"
        value={value}
        onChange={OnChangeText}
      />
    </>
  );
};

export default InputComponent;

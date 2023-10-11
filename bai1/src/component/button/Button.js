import React from "react";
import "./Button.scss";
import styles from "./button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${
        props.secondary ? styles.buttonSecondary : ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;

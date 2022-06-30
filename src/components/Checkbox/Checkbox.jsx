import React from "react";
import "./Checkbox.css";

const Checkbox = ({ inputName, inputValue, inputId, labelText, subMenu, clickFunction }) => {
  return (
    <label
    onClick={()=> clickFunction()}
      className={
        subMenu == true ? "sub-private__label" : "housing-catalog__town-item"
      }
      htmlFor={inputId}
    >
      <input
        className={
          subMenu == true
            ? "housing-catalog__private-house"
            : "housing-catalog__town-input"
        }
        type="checkbox"
        name={inputName}
        value={inputValue}
        id={inputId}
      />
      <div className="housing-catalog__housing-pseudo-checkbox"></div>
      <p
        className={
          subMenu == true
            ? "housing-catalog__housing-label"
            : "housing-catalog__town-label"
        }
      >
        {labelText}
      </p>
    </label>
  );
};

export default Checkbox;

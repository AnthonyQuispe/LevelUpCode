import React from "react";
import "./checkbox.scss";

export default function Checkbox({ id, checked, onChange }) {
  return (
    <>
      <div className="switch">
        <div className="switch__1">
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />
          <label htmlFor={id}></label>
        </div>
      </div>
    </>
  );
}

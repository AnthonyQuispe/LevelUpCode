import React from "react";
import "./checkbox.scss";

export default function Checkbox({ id }) {
  return (
    <>
      <div className="switch">
        <div className="switch__1">
          <input id={id} type="checkbox" />
          <label htmlFor={id}></label>
        </div>
      </div>
    </>
  );
}

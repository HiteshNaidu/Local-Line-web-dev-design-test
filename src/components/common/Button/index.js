import React from "react";

export default function Button(prop) {
  return (
    <>
      <button className={prop.styles} onClick={prop.handleClick}>
        {prop.label}
      </button>
    </>
  );
}

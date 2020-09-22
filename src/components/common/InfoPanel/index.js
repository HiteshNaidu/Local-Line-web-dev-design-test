import React from "react";

export default function InfoPanel({ label, data, children }) {
  return (
    <>
      <div className="info-panel">
        <label className="info-label">{label}</label>
      </div>
      {children}
      <div className="info-data">{data}</div>
    </>
  );
}

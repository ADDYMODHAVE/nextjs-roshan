import React from "react";

const Loadingspinner = () => {
  return (
    <div
      className="d-flex justify-content-center overflow-hidden"
      style={{ margin: "250px" }}
    >
      <div
        className="spinner-border text-light"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hiddent"></span>
      </div>
    </div>
  );
};

export default Loadingspinner;

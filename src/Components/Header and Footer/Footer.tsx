import React from "react";

export const Footer = () => {
  return (
    <div className="bg-dark mt-2 d-flex  flex-column align-items-center">
      <address
        className=" text-light text-center fw-bold "
        style={{ fontSize: "15px" }}
      >
        Written by Roshan Chinchpure ,<br />
        Chatrapati Shivaji maharaj Chawk Manchar Ambegoan,
        <br />
        PUNE
      </address>
      <h6 className="text-light overflow-y-hidden text-center">
        <i className="fa-solid fa-copyright"></i> All Rights Reserved Roshan
        Chinchpure Photopgraphy
      </h6>
    </div>
  );
};

import React, { useEffect } from "react";

export const OrderBookingFlash = () => {
  const [show, setshow] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshow(!show);
    }, 10000);
  }, [show]);

  return (
    <div className="text-center text-light fw-bold m-2 ">
      {show ? <h1 className="overflow-hidden">Order Now</h1> : <h1 className="overflow-hidden">Offer limted</h1>}
    </div>
  );
};

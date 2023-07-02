import React from "react";
import { Context } from "@/Store/Context";
import { contexttype } from "@/common/contexttype";

export const BookOrder = () => {
  const Data: contexttype = React.useContext<any>(Context);
  const OnGetUserOrder = (e: any) => {
    e.preventDefault();

    const dateformat = new Date(e.target.date.value).toLocaleDateString(
      "en-US",
      {
        day: "2-digit",
        month: "long",
        year: "2-digit",
      }
    );

    const OrderDeatils = {
      name: e.target.username.value,
      email: e.target.email.value,
      mobile: e.target.mobile.value,
      date: dateformat,
      location: e.target.location.value,
      budget: e.target.budget.value,
      pack: e.target.pack.value,
      refernce: `${e.target.refernce.value}-${e.target.refdetails.value}`,
    };

    e.target.username.value = "";
    e.target.email.value = "";
    e.target.mobile.value = "";
    e.target.location.value = "";
    e.target.budget.value = "";
    e.target.pack.value = "";
    e.target.refdetails.value = "";
    alert("Thanks For Booking Have A great Day");
    Data.AddOrder(OrderDeatils);
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-light overflow-hidden">Book Your Order Now</h1>
        <form
          className="bg-dark text-light fw-bold text-center p-3 w-50"
          onSubmit={OnGetUserOrder}
        >
          <div>
            <label className="form-label">Enter Your Name* :</label>
            <input
              type="text"
              className="form-control"
              required
              name="username"
            />
          </div>
          <div>
            <label className="form-label">Enter Your email :</label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div>
            <label className="form-label">Enter Your Mobile No* :</label>
            <input
              type="text"
              className="form-control"
              required
              maxLength={10}
              name="mobile"
            />
          </div>
          <div>
            <label className="form-label">Select Date* :</label>
            <input type="date" className="form-control" required name="date" />
          </div>
          <div>
            <label className="form-label">Location:* :</label>
            <input
              type="text"
              className="form-control"
              required
              name="location"
            />
          </div>
          <div>
            <label className="form-label">Budget:* :</label>
            <input
              type="text"
              className="form-control"
              required
              placeholder="10k"
              name="budget"
            />
          </div>
          <div className="m-3">
            <label className="form-label">PACK :</label>
            <select
              className="form-select form-select-sm text-center"
              name="pack"
            >
              <option value="NOT DECIDED" selected>
                NOT DECIDED
              </option>
              <option value="ADVANCE">ADVANCE</option>
              <option value="BASIC">BASIC</option>
              <option value="MEDIUM">MEDIUM</option>
            </select>
          </div>
          <div className="m-3">
            <label className="form-label">Refernce :</label>
            <select
              className="form-select form-select-sm text-center"
              name="refernce"
              required
            >
              <option value="YOUTUBE" selected>
                YOUTUBE
              </option>
              <option value="INSTAGRAM">INSTAGRAM</option>
              <option value="SEARCH">SEARCH</option>
              <option value="FRIENDS">FRIENDS</option>
              <option value="RELATIVE">RELATIVE</option>
            </select>
            <div className="form-floating m-2">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                name="refdetails"
                required
              ></textarea>
              <label htmlFor="floatingTextarea">GIVE DETAILS</label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Book Order
          </button>
        </form>
      </div>
    </>
  );
};

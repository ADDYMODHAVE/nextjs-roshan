import React, { useEffect, useState } from "react";

import { Context } from "@/Store/Context";
import { contexttype } from "@/common/contexttype";
import Link from "next/link";

type propstype = {
  index: number;
  name: string;
  mobile: string;
  date: string;
  pack: string;
  location: string;
  budget: string;
  email: string;
  refrence: string;
  remove: any;
  id: string;
};

const OrderData = (props: propstype) => {
  return (
    <tr className="text-center">
      <td>{props.index}</td>
      <td>{props.name}</td>
      <td>{props.mobile}</td>
      <td>{props.date}</td>
      <td>{props.pack}</td>
      <td>{props.location}</td>
      <td>{props.budget}</td>
      <td>{props.email}</td>
      <td>{props.refrence}</td>
      <td>
        <button
          type="button"
          className="btn btn-success"
          onClick={props.remove}
        >
          ORDER DONE
        </button>
      </td>
    </tr>
  );
};

export function OrderControl(this: any) {
  const Data: contexttype = React.useContext<any>(Context);

  const ReomveOrder = (id: string) => {
    Data.DeleteOrder(id);
  };

  const UpdatedOrder = Data.OrderDetails.map((data: any, index: number) => {
    return (
      <OrderData
        index={index + 1}
        name={data.name}
        mobile={data.mobile}
        date={data.date}
        pack={data.pack}
        location={data.location}
        budget={data.budget}
        email={data.email}
        refrence={data.refernce}
        remove={ReomveOrder.bind(this, data.id)}
        id={data.id}
        key={data.id}
      />
    );
  });

  return (
    <div className="m-3 ">
      <h1 className="text-light text-center overflow-hidden p-2">ORDERS</h1>
      <div className="d-flex ">
        <Link href="/admin" className=" ms-auto m-2">
          <button type="button" className="btn btn-danger text-center">
            BACK
          </button>
        </Link>
      </div>

      <h5 className="text-light text-center overflow-hidden p-2"></h5>
      <table className="table table-light ">
        <thead>
          <tr className="text-center">
            <th scope="col">Index No.</th>
            <th scope="col">NAME</th>
            <th scope="col">MOBILE</th>
            <th scope="col">DATE</th>
            <th scope="col">PACK</th>
            <th scope="col">LOCATION</th>
            <th scope="col">BUDGET</th>
            <th scope="col">EMAIL</th>
            <th scope="col">Refrence</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>{UpdatedOrder}</tbody>
      </table>
    </div>
  );
}

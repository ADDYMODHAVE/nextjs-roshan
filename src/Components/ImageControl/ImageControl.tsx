import React, { useEffect, useState } from "react";

import { Context } from "@/Store/Context";
import { contexttype } from "@/common/contexttype";
import Link from "next/link";

type propstype = {
  index: number;
  title: string;
  remove: any;
  link: string;
  id: string;
};

const TableImages = (props: propstype) => {
  return (
    <tr className="text-center">
      <td>{props.index}</td>
      <td>
        <img src={props.link} alt="image1" style={{ width: "6rem" }} />
      </td>
      <td>{props.title}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={props.remove}>
          REOMVE
        </button>
      </td>
    </tr>
  );
};

export function ImageControl(this: any) {
  const [category, SetIsCategory] = useState("wedding");
  const [CategoryWiseImager, SetCategoryWiseImage] = useState<any>([]);
  const Data: contexttype = React.useContext<any>(Context);
  const CategoryUpdate = (e: any) => {
    SetIsCategory(e.target.value);
  };
  const UpdateCategory = () => {
    const UpdatedImages = Data.AvilableImage.filter((data: any) => {
      console.log(category);
      return data.category === category;
    });
    SetCategoryWiseImage(UpdatedImages);
  };
  const ReomveVideoHandler = (id: string) => {
    Data.DeleteImage(id);
  };

  const UpdatedTable = CategoryWiseImager.reverse().map(
    (data: any, index: number) => {
      return (
        <TableImages
          title={data.title}
          link={data.link}
          id={data.id}
          index={index + 1}
          remove={ReomveVideoHandler.bind(this, data.id)}
          key={data.id}
        />
      );
    }
  );

  useEffect(() => {
    UpdateCategory();
  }, [category, Data]);

  return (
    <div className="m-3 ">
      <h1 className="text-light text-center overflow-hidden p-2">
        IMAGE CONTROL
      </h1>
      <div className="d-flex ">
        <Link href="/admin" className=" ms-auto m-2">
          <button type="button" className="btn btn-danger text-center">
            BACK
          </button>
        </Link>
      </div>
      <div className="d-flex justify-content-center">
        <form>
          <select
            className="form-select text-center"
            name="category"
            onChange={CategoryUpdate}
            defaultValue={"wdding"}
          >
            <option value="wedding">wedding</option>
            <option value="prewedding">pre-wedding</option>
            <option value="maternity">maternity</option>
            <option value="engegment">Engegment Shoot</option>
            <option value="albumpage">Album Page</option>
            <option value="cinematicwork">Cinematic Work</option>
          </select>
        </form>
      </div>
      <h5 className="text-light text-center overflow-hidden p-2">{category}</h5>
      <table className="table table-light ">
        <thead>
          <tr className="text-center">
            <th scope="col">Index No.</th>
            <th scope="col">IMAGE</th>
            <th scope="col">TITLE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>{UpdatedTable}</tbody>
      </table>
    </div>
  );
}

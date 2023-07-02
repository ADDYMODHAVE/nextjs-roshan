import React from "react";
import { Context } from "@/Store/Context";
import { contexttype } from "@/common/contexttype";
import Link from "next/link";

type propstype = {
  title: string;
  remove: any;
  id: string;
  index: number;
};

const TableData = (props: propstype) => {
  return (
    <tr className="text-center">
      <td>{props.index}</td>
      <td>{props.title}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={props.remove}>
          REOMVE
        </button>
      </td>
    </tr>
  );
};

const VideoControl = function (this: any) {
  const Data: contexttype = React.useContext<any>(Context);

  const ReomveVideoHandler = (id: string) => {
    Data.DeleteVideo(id);
  };

  const UpdatedTable = Data.AvilableVideo.reverse().map(
    (data: any, index: number) => {
      return (
        <TableData
          title={data.title}
          id={data.id}
          index={index + 1}
          remove={ReomveVideoHandler.bind(this, data.id)}
          key={data.id}
        />
      );
    }
  );

  return (
    <div className="m-3 ">
      <h1 className="text-light text-center overflow-hidden p-2">
        VIDEO CONTROL
      </h1>
      <div className="d-flex ">
        <Link href="/admin" className=" ms-auto m-2">
          <button type="button" className="btn btn-danger text-center">
            BACK
          </button>
        </Link>
      </div>

      <table className="table table-light ">
        <thead>
          <tr className="text-center">
            <th scope="col">Index No.</th>
            <th scope="col">TITLE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>{UpdatedTable}</tbody>
      </table>
    </div>
  );
};

export default VideoControl;

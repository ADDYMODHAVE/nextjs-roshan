import React from "react";
import { Context } from "@/Store/Context";
import { contexttype } from "@/common/contexttype";
import Link from "next/link";

export const Sitecontrol = () => {
  const [Video, SetImage] = React.useState(true);
  const Data: contexttype = React.useContext<any>(Context);

  const GetUserData = (e: any) => {
    e.preventDefault();
    let assetinfo;
    if (Video) {
      assetinfo = {
        title: e.target.title.value,
        link: e.target.link.value,
      };
      Data.AddVideo(assetinfo);
    } else {
      assetinfo = {
        title: e.target.title.value,
        link: e.target.link.value,
        category: e.target.category.value,
      };
      Data.AddImage(assetinfo);
    }
    e.target.title.value = "";
    e.target.link.value = "";
  };

  return (
    <>
      <div className="bg-dark text-info d-flex justify-content-center m-5 rounded">
        <form className="text-center p-5 rounded" onSubmit={GetUserData}>
          <select
            className="form-select form-select-lg mb-3"
            defaultValue={"VIDEO"}
            onChange={() => {
              SetImage(!Video);
            }}
            required
          >
            <option value="IMAGE">IMAGE</option>
            <option value="VIDEO">VIDEO</option>
          </select>
          {!Video && (
            <select
              className="form-select form-select-lg mb-3"
              name="category"
              required
            >
              <option value="wedding">wedding</option>
              <option value="prewedding">pre-wedding</option>
              <option value="maternity">maternity</option>
              <option value="engegment">Engegment Shoot</option>
              <option value="albumpage">Album Page</option>
              <option value="cinematicwork">Cinematic Work</option>
            </select>
          )}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              ADD TITLE
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="link" className="form-label">
              ADD LINK
            </label>
            <input
              type="text"
              className="form-control"
              id="link"
              name="link"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            ADD
          </button>
        </form>
      </div>
      <div className="d-flex justify-content-center m-5">
        <Link href="/imagecontrol">
          <button type="button" className="btn btn-primary mx-2">
            IMAGE CONTROL
          </button>
        </Link>
        <Link href="/videocontrol">
          <button type="button" className="btn btn-secondary mx-2">
            VIDEO CONTROL
          </button>
        </Link>
        <Link href="/order">
          <button type="button" className="btn btn-success mx-2">
            ORDERS
          </button>
        </Link>
      </div>
    </>
  );
};

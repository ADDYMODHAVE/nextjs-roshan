import React, { useEffect, useState } from "react";
import classes from "./Gallery.module.css";
import { Context } from "@/Store/Context";
import { contexttype } from "@/common/contexttype";

type proptype = {
  link: string;
  id: string;
};

const AddDynamicCategory = (props: proptype) => {
  return (
    <>
      <img src={props.link} alt="dummy" />
    </>
  );
};

function Gallery() {
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
  const UpdatedImageList = CategoryWiseImager.map((data: any) => {
    return <AddDynamicCategory link={data.link} id={data.id} key={data.id} />;
  });

  useEffect(() => {
    UpdateCategory();
  }, [category, Data]);

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
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

      <div className={classes["main-gallery"]}>{UpdatedImageList}</div>
    </>
  );
}

export default Gallery;

import React from "react";
import Carousel from "react-bootstrap/Carousel";

import classes from "./FrontPageCrowsel.module.css";
import { Context } from "@/Store/Context";
import { contexttype } from "@/common/contexttype";

type proptype = {
  link: string;
  id: string;
};

const ImageAdd = (props: proptype) => {
  return (
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src="https://lh3.googleusercontent.com/pw/AJFCJaWDAE0xzKl1x85T3F1ntBLMo0utqwc3V0H0JMQuuPu4T4ml-FQs-e6VeSMANLfFYNroFCMFcyI3lIfvD-0fXyo_j2vX7BphNKIGFPIZwIxPOzvxgu9CsGusrRo-vyHuGmltIosFmMlTwVF254P2g2oqG19OB_DJAw14o3I3iv7dIC47phpVgDn6qyTxVGPsNiX2TOEeBCx_v2039FJM2Rtu3QXlIjbQrbig7XRAiLBWtYoyLA1n0OBYPL-b5uhIHUUmLgmLoRshTuvMzugHfiUuZHY0V66Zb7tdN6Iz-CM5WMZzt0T9IRVNmwOf5QOHhCrHGrpYJLGWyYd5MzsMwNFN7oVOhKwm3eQbNy7mof-UuumPu9m94YXSvqH8GZON3SInZlfq1bMPHCI3PpaR7DrCioB7UE1Lev2lZYJNldgAKVKImZfFet_QR_cVpyEQF4f1TBsQC4KvPP7-7fbvDoZITsnyDbkbinIqU8OhOlo4l6CSpHx4Ct7F4nvYmAunuxBlTkGmVG9Ehtfpj_4pPX3eoKj1XKoJ7nav4ovQH_Gjf328XqVbc98p6dYZcRBHmml-QtK8JU6OoVzWx2VJZG0hSjMf2uQT9rZ8eZYEXFY8l4e9z5BRQ79Wnd1m2aTAkUmQLVd0cV32q7Dyg7bUurks8p87cvjDEe9DPb1um306phMAV2qA7iUxmIHl6gXzrJFDIMQi9rw2XtY2ZyhgP49AG_xttjqu71HvOUV2oTzwKVK-trtDPpKJTmI_YwPlMD8Rkjn4h86AjxzGMrf-7rTrpsMqFIVeMFjn0VmyUKu1KSrtc-YxIFyXiATuH0A0pzD9PHnyoY3t-ufR1L4IE9D2whqiU5eWz3XgUDGNRelUbbFaD-xFBsPUSsbq5pqK3ucW6ZUfLj-Csec9UG4CgmIYDP2SL8mApX2qr9VUIRa4tGxz3jpzRXARgdZkIV8FynR_xEJD8fm2KV6YOnteF-LuL1J8loeS=w643-h429-s-no?authuser=2"
        alt="First slide"
      />
    </Carousel.Item>
  );
};

export const FrontPageCrowsel = () => {
  const Data: contexttype = React.useContext<any>(Context);
  const Weddingarry = Data.AvilableImage.filter((data: any) => {
    return data.category === "wedding";
  });
  const ThreeImages = Weddingarry.slice(0, 3);

  const UpdatedImage = ThreeImages.map((data: any) => {
    return <ImageAdd link={data.link} id={data.id} key={data.id} />;
  });
  return (
    <>
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={ThreeImages[0]?.link}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={ThreeImages[1]?.link}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={ThreeImages[2]?.link}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className={classes.mainheader}>
        <h6 className={classes["mainheader-fontsize"]}>
          A happy marriage is a long conversation which always seems too short
          ...
        </h6>
      </div>
    </>
  );
};

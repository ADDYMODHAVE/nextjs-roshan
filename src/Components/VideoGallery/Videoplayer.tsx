import classes from "./VideoPlayer.module.css";
import React from "react";
import ReactPlayer from "react-player/youtube";
import { Context } from "@/Store/Context";
import { contexttype } from "@/common/contexttype";

type proptype = {
  link: string;
  title: string;
  id: string;
};

const Player = (props: proptype) => {
  return (
    <>
      <div className={classes.mainvideoplayer}>
        <h2 className="overflow-y-hidden">{props.title}</h2>
        <div style={{ overflow: "hidden" }}>
          <ReactPlayer
            url={props.link}
            controls={true}
            width="95vw"
            height="60vh"
          />
        </div>
      </div>
    </>
  );
};

const VideoPlayerGallery = () => {
  const Data: contexttype = React.useContext<any>(Context);

  const UpdatedVideo = Data.AvilableVideo.map((data: any) => {
    return (
      <Player link={data.link} title={data.title} id={data.id} key={data.id} />
    );
  });

  return <>{UpdatedVideo}</>;
};

export default VideoPlayerGallery;

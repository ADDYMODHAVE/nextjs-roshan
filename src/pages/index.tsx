import { FrontPageCrowsel } from "@/Components/HomePage/FrontPageCrowsel";
import { HomePageGallery } from "@/Components/HomePage/HomePageGallery";
import { PriceCard } from "@/Components/HomePage/PriceCard";
import VideoPlayer from "@/Components/Util/Videoplayer";
import Loadingspinner from "@/common/Loading";
import React, { useEffect } from "react";

let loading = 400;

export default function Home() {
  const [loading1, UpdateLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      UpdateLoading(false);
    }, loading);
  }, []);

  return (
    <>
      {loading1 ? (
        <Loadingspinner />
      ) : (
        <>
          <FrontPageCrowsel />
          <HomePageGallery />
          <VideoPlayer />
          <PriceCard />
        </>
      )}
    </>
  );
}

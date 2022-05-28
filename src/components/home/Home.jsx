import React from "react";
import { HomeHeader } from "./home_header/HomeHeader";
import { MyCarousel } from "./carousel/Carousel";
import EasyWay from "./easy_way/EasyWay";

export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <MyCarousel />
    </div>
  );
};

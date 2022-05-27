import React from "react";
import { HomeHeader } from "./home_header/HomeHeader";
import { MyCarousel } from "./carousel/Carousel";

export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <MyCarousel />
    </div>
  );
};

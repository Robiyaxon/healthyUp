import React from "react";
import { HomeHeader } from "./home_header/HomeHeader";
import { MyCarousel } from "./carousel/Carousel";
import { Specialists } from "./specialists/Specialists";

export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <MyCarousel />
      <Specialists /> 
    </div>
  );
};

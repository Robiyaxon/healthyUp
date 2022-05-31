import React from "react";
import { HomeHeader } from "./home_header/HomeHeader";
import { MyCarousel } from "./carousel/Carousel";
import { Cause } from "./Cause/Cause";
import { Specialists } from './specialists/Specialists';

export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Cause />
      <MyCarousel />
      <Specialists /> 
    </div>
  );
};

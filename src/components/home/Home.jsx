import React from "react";
import { HomeHeader } from "./home_header/HomeHeader";
import { MyCarousel } from "./carousel/Carousel";
import EasyWay from "./easy_way/EasyWay";
import { Task } from "../task/Task";
export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <MyCarousel />
      <Task />
      <EasyWay />
    </div>
  );
};

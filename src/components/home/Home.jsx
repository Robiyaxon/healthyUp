import React from "react";
import { Header } from "./header/Header";
import { Task } from "./../task/Task";
import { MyCarousel } from "./carousel/Carousel";
import EasyWay from "./easy_way/EasyWay";

export const Home = () => {
  return (
    <div>
      <Header />
      <MyCarousel />
      <Task />
      <EasyWay />
    </div>
  );
};

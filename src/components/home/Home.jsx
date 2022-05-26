import React from "react";
import { Header } from "./header/Header";
import { Task } from "./../task/Task";
import { MyCarousel } from "./carousel/Carousel";

export const Home = () => {
  return (
    <div>
      <Header />
      <MyCarousel />
      </div>              
  );
};

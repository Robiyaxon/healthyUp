import React from "react";
import { HomeHeader } from "./home_header/HomeHeader";
import { MyCarousel } from "./carousel/Carousel";
import { Cause } from "./Cause/Cause";
import { Search2 } from "../search/Search";
import EasyWay from './easy_way/EasyWay';

export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Cause />
      <MyCarousel />
      <EasyWay />
      <Search2/>
    </div>
  );
};

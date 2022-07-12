import React from "react";
import { HomeHeader } from "./home_header/HomeHeader";
import { MyCarousel } from "./carousel/Carousel";
import { Cause } from "./Cause/Cause";
import EasyWay from "./easy_way/EasyWay";
import Comment from "./comment/Comment";
import { Specialists } from "./specialists/Specialists";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Cause />
      <MyCarousel />
      <EasyWay />
      <Specialists />
      <Comment />
    </div>
  );
};
export default Home;

import React, { lazy, useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import { Spin } from "antd";

import ScrollToTop from "./ScrollerOn";

import { TopHeader } from "./components/top_header/TopHeader";
import { MyBackTop } from "./components/backTop/BackTop";
import { Footer } from "./components/footer/Footer";
import { MySearch } from "./components/search/Search";
import { dataMapForRoute } from './helpers/RouteMap';

import "./App.css";



const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  const handleLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading ? (
        <>
          <Spin />
        </>
      ) : (
        <>
          <ScrollToTop />
          <TopHeader />
          <Routes>{dataMapForRoute}</Routes>
          <div className="select"></div>
        </>
      )}

      <MyBackTop />
      <MySearch />
      <Footer />

    </div>
  );
};

export default App;

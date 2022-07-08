import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import ScrollToTop from "./ScrollerOn";
import { TopHeader } from "./components/top_header/TopHeader";
import { Footer } from "./components/footer/Footer";
import { MySearch } from "./components/search/Search";
import { RouterMap } from "./helpers/RouteMap";

import "./App.css"

const App = () => {

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, [isLoading]);

  const handleLoading = () => {
    setIsLoading(false);
  };
  return (
    <div className="App">
      {isLoading ? (
        <>
          <div className="SpinStyle">
            <Spin />
          </div>
        </>
      ) : (
        <>
          <ScrollToTop />
          <TopHeader />
          <RouterMap />
          <div className="select"></div>
        </>
      )}
      <MySearch />
      <Footer />
    </div>
  );
};

export default App;
